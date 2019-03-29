import {ChangeDetectorRef, Component, NgZone, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommonService} from "./core/common.service";
import * as $ from 'jquery';
import {stringDistance} from "codelyzer/util/utils";
import {Angular5Csv} from "angular5-csv/dist/Angular5-csv";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public asinList: any = [];
  public productList: any = [];
  public from_page: number;
  public tabUrl: string;
  public asinNumber: any = [];
  public tabs: any = [];
  public temp: boolean = false;
  public to_page: number;
  public overlaypopup: boolean = false;
  public buttonName: any = 'Search and Download';

  constructor(private _commonService: CommonService, private zone: NgZone, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  doSearchDownload() {
    // this.overlaypopup = true;
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, (tabs) => {
      if (tabs.length > 0) {
        if (tabs[0].url !== undefined && tabs[0].url !== null && tabs[0].url !== '') {
          var tabUrl = tabs[0].url;
        }
      }
      this.zone.run(() => {
        this.processMainlist(tabUrl);
      });
    });
  }

  getAsinDetail($asin) {
    let url = 'https://www.amazon.com/dp/';
    url = url + $asin;

    var _result;
    $.ajax({
      url: url,
      async: false,
      success: function (data) {
        let parser = new DOMParser();
        let parsedHtml = parser.parseFromString(data, 'text/html');

        // product
        let product_title = parsedHtml.getElementById('productTitle').innerText.trim();
        let product_price = parsedHtml.getElementById('priceblock_ourprice').innerText.trim();
        let product_brand = parsedHtml.getElementById('bylineInfo').innerText.trim();
        let product_quantity_arr = parsedHtml.getElementById('quantity').innerHTML.match(/<option[^>]*>([^<]*)<\/option>/g);
        let product_quantity = product_quantity_arr[product_quantity_arr.length - 1].replace(/(<([^>]+)>)/ig, "").trim();

        _result = {
          'Product Title': product_title,
          'Price': product_price,
          'Brand': product_brand,
          'Quantity': product_quantity
        };
        console.log(_result);
      }
    });
    return _result;

  }

  getAsinList(url) {
    var _result = [];
    $.ajax({
      url: url,
      async: false,
      success: function (data) {
        let result = data.match(/data-asin="[A-Za-z0-9]*"/g);

        result = result.map(item => {
          item = item.replace("data-asin=", "");
          item = item.replace(/["']/g, "");
          item = item.trim();
          return item;
        });
        _result = result.filter(item => item != "");

      }
    });
    return _result;
  }

  processMainlist(tabUrl) {
    this.asinList = [];
    for (let i = this.from_page; i <= this.to_page; i++) {
      let perms = '&page=' + i;
      let url = tabUrl + perms;
      let result = this.getAsinList(url);
      this.asinList = this.asinList.concat(result);
      this.asinNumber = this.asinList.length;
      console.log("ASIN Total", this.asinNumber);
      this.ref.detectChanges();
    }
    this.processForAsin();
  }

  cancelDownload() {
    this.overlaypopup = !this.overlaypopup;
  }

  processForAsin() {
    for (let i = 0; i < this.asinList.length; i++) {
      let result = this.getAsinDetail(this.asinList[i]);
      this.productList = this.productList.concat(result);
      console.log('process asin', this.asinList[i]);
    }
    this.downloadCsv();
    this.overlaypopup = false;
  }

  downloadCsv() {
    var head = ['Product Title', 'Price', 'Brand', 'Quantity'];
    new Angular5Csv(this.productList, 'My Report', {headers: (head)});
  }
}



