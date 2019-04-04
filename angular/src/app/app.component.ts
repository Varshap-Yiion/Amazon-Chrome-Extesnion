import {ApplicationRef, ChangeDetectorRef, Component, Inject, NgZone} from '@angular/core';
import {TAB_ID} from './tab-id.injector';
import {Angular5Csv} from "angular5-csv/dist/Angular5-csv";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// tslint:disable:variable-name
export class AppComponent {
  readonly tabId = this._tabId;
  message: string;
  title = 'app';
  asinList: any = [];
  productList: any = [];
  from_page: number;
  tabUrl: string;
  asinNumber: any = [];
  tabs: any = [];
  temp: boolean = false;
  to_page: number;
  overlaypopup: boolean = false;
  buttonName: any = 'Search and Download';

  constructor(@Inject(TAB_ID) public _tabId: number, public _changeDetector: ChangeDetectorRef, public _applicationRef: ApplicationRef, public zone: NgZone, public  _appService: AppService) {
    // this._changeDetector.markForCheck();
  }

  doSearchDownload(): void {
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, (tabs) => {
      if (tabs.length > 0) {
        if (tabs[0].url !== undefined && tabs[0].url !== null && tabs[0].url !== '') {
          this.tabUrl = tabs[0].url;
          // this.processMainlist(this.tabUrl);
          this.zone.run(() => {
            this.tabUrl = this.tabUrl;
            this.overlaypopup = true;
            this.processMainlist(this.tabUrl);
          });
        }
      }
    });
  }


  getAsinDetail($asin, is_last) {
    let url = 'https://www.amazon.com/dp/';
    url = url + $asin;

    this._appService.getURLData(url).subscribe((data) => {
      let parser = new DOMParser();
      let parsedHtml = parser.parseFromString(data, 'text/html');

      // product
      let product_title = parsedHtml.getElementById('productTitle').innerText.trim();
      let product_price = parsedHtml.getElementById('priceblock_ourprice').innerText.trim();
      let product_brand = parsedHtml.getElementById('bylineInfo').innerText.trim();
      let product_quantity_arr = parsedHtml.getElementById('quantity').innerHTML.match(/<option[^>]*>([^<]*)<\/option>/g);
      let product_quantity = product_quantity_arr[product_quantity_arr.length - 1].replace(/(<([^>]+)>)/ig, "").trim();

      let _result = {
        'Product Title': product_title,
        'Price': product_price,
        'Brand': product_brand,
        'Quantity': product_quantity
      };

      this.productList = this.productList.concat(_result);
      if (is_last == true) {
        this.downloadCsv();
      }
    });
  }

  getAsinList(url, is_last) {
    this._appService.getURLData(url).subscribe((data) => {
      let result = data.match(/data-asin="[A-Za-z0-9]*"/g);
      result = result.map(item => {
        item = item.replace("data-asin=", "");
        item = item.replace(/["']/g, "");
        item = item.trim();
        return item;
      });
      let asinData = result.filter(item => item != "");
      this.zone.run(() => {
        this.asinList = this.asinList.concat(asinData);
      });
      if (is_last == true) {
        console.log("processForAsinZone", this.asinList);
        this.processForAsin();
      }
    });
  }

  processMainlist(tabUrl): void {

    this.asinList = [];
    for (let i = this.from_page; i <= this.to_page; i++) {
      console.log("page", i);
      let perms = '&page=' + i;
      let url = tabUrl + perms;
      this.getAsinList(url, (this.to_page == i) ? true : false);
    }
  }


// getUpdateData(){
//   this.asinList = this.asinList;
//   this.asinNumber = this.asinNumber;
// }

  refresh(): void {
    // this._applicationRef.tick();
    this._changeDetector.detectChanges();
  }

  cancelDownload() {
    this.overlaypopup = !this.overlaypopup;
  }

  processForAsin() {
    console.log("processForAsinfn", this.asinList);
    this.productList = [];
    for (let i = 0; i < this.asinList.length; i++) {
      console.log('asinList', i);
      this.getAsinDetail(this.asinList[i], ((this.asinList.length - 1) == i) ? true : false);
    }
  }

  downloadCsv() {
    var head = ['Product Title', 'Price', 'Brand', 'Quantity'];
    new Angular5Csv(this.productList, 'My Report', {headers: (head)});
    this.overlaypopup = false;
  }
}
