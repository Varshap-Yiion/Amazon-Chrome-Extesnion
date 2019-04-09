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
  productList1: any = [];
  from_page: number;
  to_page: number;
  minimum_stock: number;
  minimum_price: number;
  maximum_price: number;
  public trademaked_product: any;
  public min_stock: any;
  public mini_price: any;
  public maxi_price: any;
  public min_price: any;
  public max_price: any;
  public pro_margin: any;
  public ama_commision: any;
  public exch_difference: any;
  public profitmargin: any;
  public amazoncommision: any;
  public exchangedifference: any;
  public product_quantity: number;
  public product_price: number;
  public sku_code: number;
  public profit_margin: number;
  public amazon_commision: number;
  public exchange_difference: number;
  public skucode: any;
  public result1: any = [];
  tabUrl: string;
  asinNumber: any = [];
  tabs: any = [];
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

  processMainlist(tabUrl): void {

    this.asinList = [];
    for (let i = this.from_page; i <= this.to_page; i++) {
      console.log('page', i);
      let perms = '&page=' + i;
      let url = tabUrl + perms;
      this.getAsinList(url, (this.to_page === i) ? true : false);
    }
  }

  getAsinList(url, is_last) {
    console.log(is_last);
    this._appService.getURLData(url).subscribe((data) => {
      // console.log(data);
      let result = data.match(/data-asin="[A-Za-z0-9]*"/g);
      result = result.map(item => {
        item = item.replace('data-asin=', '');
        item = item.replace(/["']/g, '');
        item = item.trim();
        return item;
      });
      let asinData = result.filter(item => item !== '');
      this.zone.run(() => {
        this.asinList = this.asinList.concat(asinData);
      });
      if (is_last === true) {
        console.log('processForAsinZone', this.asinList);
        this.processForAsin();
      }
    });
  }

  processForAsin() {
    console.log('processForAsinfn', this.asinList);
    this.productList = [];
    for (let i = 0; i < this.asinList.length; i++) {
      console.log('asinList', i);
      this.getAsinDetail(this.asinList[i], ((this.asinList.length - 1) === i) ? true : false);
    }
  }


  getAsinDetail($asin, is_last) {
    let url = 'https://www.amazon.com/dp/';
    url = url + $asin;
    this._appService.getURLData(url).subscribe((data) => {
      // console.log(data);
      let parser = new DOMParser();
      let parsedHtml = parser.parseFromString(data, 'text/html');
// console.log(data);
      // product
      let product_title = parsedHtml.getElementById('productTitle').innerText.trim();
      let product_price = parsedHtml.getElementById('priceblock_ourprice').innerText.trim();
      let product_brand = parsedHtml.getElementById('bylineInfo').innerText.trim();
      let product_quantity_arr = parsedHtml.getElementById('quantity').innerHTML.match(/<option[^>]*>([^<]*)<\/option>/g);
      let product_quantity = product_quantity_arr[product_quantity_arr.length - 1].replace(/(<([^>]+)>)/ig, "").trim();
      // this.product_quantity = parseInt(product_quantity);
      // console.log(this.product_quantity);

      // this.product_price = product_price;
      this.product_price =  parseFloat(product_price.split('$')[1]);
      this.min_stock = (this.minimum_stock) ? (this.minimum_stock) : '';
      this.mini_price = (this.minimum_price) ? (this.minimum_price) : '';
      this.maxi_price = (this.maximum_price) ? (this.maximum_price) : '';
      this.skucode = (this.sku_code) ? (this.sku_code) : '';
      this.profitmargin = (this.profit_margin) ? (this.profit_margin) : '';
      this.amazoncommision = (this.amazon_commision) ? (this.amazon_commision) : '';
      this.exchangedifference = (this.exchange_difference) ? (this.exchange_difference) : '';
      console.log(this.min_stock);
      console.log(this.mini_price);
      console.log(this.maxi_price);
      console.log(this.skucode);
      console.log(this.profitmargin);
      console.log(this.amazoncommision);
      console.log(this.exchangedifference);

      console.log(this.trademaked_product);


      if (this.profitmargin !== '' && this.amazoncommision !== '' && this.exchangedifference !== '' && this.skucode !== '') {


        let _result1 = {
          'Product Title': product_title,
          'Price': product_price,
          'Brand': product_brand,
          'Quantity': product_quantity
        };

        this.productList1 = this.productList1.concat(_result1);
        console.log(this.productList);
        let sku_code1 = this.sku_code + '1000' + this.productList1.length;
        console.log( sku_code1);

        this.pro_margin = ((this.product_price * this.profit_margin) / 100 );
        this.ama_commision = ((this.product_price * this.amazon_commision) / 100 );
        this.exch_difference = (this.product_price * this.exchange_difference) ;


        let _result = {
          'Product Title': product_title,
          'Price': product_price,
          'Brand': product_brand,
          'Quantity': product_quantity,
          'SKU Code': sku_code1,
          'Profit Margin': this.pro_margin,
          'Amazon Commision': this.ama_commision,
          'Exchange rate difference': this.exch_difference,
        };

        this.productList = this.productList.concat(_result);
        console.log(this.productList);
        if (is_last === true) {
          this.downloadCsv();
        }
      }



      if (this.min_stock != null && parseInt(product_quantity) >= this.minimum_stock &&  this.mini_price != null && this.maxi_price != null) {
                // This array contains strings that needs to be removed from main array
        console.log('if min stock and min max price');
        this.min_price = this.product_price - ((this.product_price * this.minimum_price) / 100 );
        this.max_price = this.product_price + ((this.product_price * this.maximum_price) / 100 );

        let _result = {
          'Product Title': product_title,
          'Price': product_price,
          'Brand': product_brand,
          'Quantity': product_quantity,
          'Minimum Price': this.min_price,
          'Maximum Price': this.max_price
        };


        this.productList = this.productList.concat(_result);
        console.log(this.productList);
        if (is_last === true) {
          this.downloadCsv();
        }
      }

      if (this.min_stock != null &&  parseInt(product_quantity) >= this.minimum_stock &&  this.mini_price === null && this.maxi_price === null ) {
        // This array contains strings that needs to be removed from main array
        console.log('if min stock');
        let _result = {
          'Product Title': product_title,
          'Price': product_price,
          'Brand': product_brand,
          'Quantity': product_quantity
        };


        this.productList = this.productList.concat(_result);
        console.log(this.productList);
        if (is_last === true) {
          this.downloadCsv();
        }

      }


      if ( this.mini_price !== '' && this.maxi_price !== '' ) {
        console.log('min max price');

        this.min_price = this.product_price - ((this.product_price * this.minimum_price) / 100 );
        this.max_price = this.product_price + ((this.product_price * this.maximum_price) / 100 );
        console.log( this.min_price);
        console.log( this.max_price);
        let _result = {
          'Product Title': product_title,
          'Price': product_price,
          'Brand': product_brand,
          'Quantity': product_quantity,
          'Minimum Price': this.min_price,
          'Maximum Price': this.max_price
        };
        // this.result = _result;
        // console.log( this.result);
        this.productList = this.productList.concat(_result);
        console.log(this.productList);
        if (is_last === true) {
          this.downloadCsv();
        }
      }


      if ( this.mini_price === '' && this.maxi_price === '' && this.min_stock === '' && this.skucode === '' && this.profitmargin === '' && this.exchangedifference === '') {
        console.log('all null ');

        this.min_price = this.product_price - ((this.product_price * this.minimum_price) / 100 );
        this.max_price = this.product_price + ((this.product_price * this.maximum_price) / 100 );
        console.log( this.min_price);
        console.log( this.max_price);
        let _result = {
          'Product Title': product_title,
          'Price': product_price,
          'Brand': product_brand,
          'Quantity': product_quantity
        };
        // this.result = _result;
        // console.log( this.result);
        this.productList = this.productList.concat(_result);
        console.log(this.productList);

      if (is_last === true) {
        this.downloadCsv();
      }
      }

    });
  }

  downloadCsv() {
    if (this.mini_price !== '' && this.maxi_price !== '') {
      var head = ['Product Title', 'Price', 'Brand', 'Quantity', 'Minimun Price', 'Maximum Price'];

    }  else if (this.profitmargin !== '' && this.amazoncommision !== '' && this.exchangedifference !== '' && this.skucode !== '') {
      var head = ['Product Title', 'Price', 'Brand', 'Quantity', 'SKU Code', 'Profit Margin', 'Amazon Commision', 'Exchange Difference (CAD)'];

    }else {
      var head = ['Product Title', 'Price', 'Brand', 'Quantity'];
    }
    new Angular5Csv(this.productList, 'My Report', {headers: (head)});
    this.overlaypopup = false;
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
}
