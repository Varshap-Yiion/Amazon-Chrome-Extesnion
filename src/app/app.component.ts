import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommonService} from "./core/common.service";
import * as $ from 'jquery';
import {stringDistance} from "codelyzer/util/utils";
import {Angular5Csv} from "angular5-csv/dist/Angular5-csv";
import {LayoutService} from "./core/layout.service";

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
  public to_page: number;
  currentURL='';
  constructor(private _commonService: CommonService, private _layoutService: LayoutService) {
    this.currentURL = window.location.href;
  }

  ngOnInit() {
console.log(this.currentURL );
  }


  getAsinDetail($asin) {
    let url = 'https://www.amazon.com/dp/';
    url = url + $asin;

    var _result;
    $.ajax({
      url: url,
      async: false,
      success: function (data) {
        // console.log(data);
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
        }
        console.log(product_title);
        console.log(product_price);
        console.log(product_brand);
        console.log(product_quantity);
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

  // this._commonService.getProductList().subscribe((response: any) => {
  //   console.log(response);
  //   let parser = new DOMParser();
  //   let parsedHtml = parser.parseFromString(response, 'text/html');
  //   // let imagelist = parsedHtml.getElementsByClassName('s-result-list sg-row').innerHTML;
  //   // console.log("imagelist"+imagelist);
  //   console.log('parser' + parser);
  //   alert('adsad');
  // });


  doSearchDownload() {
    alert(this.currentURL );
    // chrome.tabs.getSelected(
    // chrome.tabs.getCurrent();
    this._layoutService.showLoading();
    // Chrome.tabs.getSelected(tab) {
    //
    // }
    // console.log(this.currentURL);
    // var that = this;
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function(tabs) {
      console.log(tabs[0].url);
      if (tabs.length > 0) {
        if (tabs[0].url !== undefined && tabs[0].url !== null && tabs[0].url !== '') {
          // that.tabId = tabs[0].id;
          var tabURL = tabs[0].url;
          console.log(tabURL);
          // that.tabTitle = tabs[0].title;
          // that.favIconUrl = tabs[0].favIconUrl;
        }
      }
    });
    let mainURL = 'https://www.amazon.com/s?k=cable&i=electronics-intl-ship&ref=nb_sb_noss';
    this.asinList = [];
    for (let i = this.from_page; i <= this.to_page; i++) {
      let perms = '&page=' + i;
      let url = mainURL + perms;
      let result = this.getAsinList(url);
      this.asinList = this.asinList.concat(result);
    }
    console.log(this.asinList);
    this.processForAsin();
    this._layoutService.hideLoading();

  }

  processForAsin() {
    for (let i = 0; i < this.asinList.length; i++) {
      let result = this.getAsinDetail(this.asinList[i]);
      this.productList = this.productList.concat(result);
    }
    console.log('productList', this.productList);
    this.downloadCsv();
  }

  downloadCsv() {
    new Angular5Csv(this.productList, 'My Report');
  }
}
