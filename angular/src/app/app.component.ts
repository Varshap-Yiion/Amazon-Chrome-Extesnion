import {ApplicationRef, ChangeDetectorRef, Component, Inject, NgZone, ViewChild} from '@angular/core';
import {TAB_ID} from './tab-id.injector';
import {Angular5Csv} from "angular5-csv/dist/Angular5-csv";
import {AppService} from "./app.service";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpClient} from "@angular/common/http";
// import { saveAs } from 'file-saver';
import { saveAs } from 'file-saver';
// import { FileSaver } from 'angular-file-saver';
// var FileSaver = require('file-saver');
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
  public brands: any;
  public products: any;
  public product: any;
  country_list: any;
  countryData: any;
  country: any;
  public trademaked_product: any;
  public trademakedproduct: any;
  public cloud_inventory_product: any;
  public cloudinventoryproduct: any;
  public critical_branded_product: any;
  public criticalbrandedproduct: any;
  public discounted_product: any;
  public discountedproduct: any;
  public shipment_tax_product: any;
  public shipmenttaxproduct: any;
  public requiring_selection_product: any;
  public requiringselectionproduct: any;
  public amazon_prime_product: any;
  public amazonprimeproduct: any;
  public SBA_tag: any;
  public SBAtag: any;
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
  product_brand: any = [];
  tabs: any = [];
  overlaypopup: boolean = false;
  public brandlist: any = [];
  editbox: boolean = false;
  buttonName: any = 'Search and Download';
  @ViewChild('edit_brand') edit_brand;
  public brandModal: NgbActiveModal;

  constructor(@Inject(TAB_ID) public _tabId: number, public _changeDetector: ChangeDetectorRef, public _applicationRef: ApplicationRef,
              public zone: NgZone, public  _appService: AppService, private  modalService: NgbModal, private http: HttpClient) {
    // this._changeDetector.markForCheck();
  }
  ngOnInit() {
    this.loadNavItems();
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
            // this.changeAddress();
            this.processMainlist(this.tabUrl);
          });
        }
      }
    });
  }
//   changeAddress() {
//     console.log(this.country_list);
//     this.country_list = this.country_list.split('', 2);
//     console.log(this.country_list);
//     console.log(this.country_list[0]);
//     console.log(this.country_list[1]);
// this.country_list = this.country_list[0] + this.country_list[1];
//     // var country_name = this.country_list[0];
//     this.country_list = this.country_list.toUpperCase();
//     console.log(this.country_list);
//
//    this.countryData = {
//       locationType: 'COUNTRY',
//       district: this.country_list,
//       countryCode: this.country_list,
//      storeContext: 'kitchen-intl-ship',
//      deviceType: 'web',
//      pageType: 'Landing',
//      actionSource: 'glow'
//
//     };
//    // this.countryData = this.country.toArray();
//    // console.log(this.countryData);
//
//
// var change_add_url = 'https://www.amazon.com/gp/delivery/ajax/address-change.html';
//     this._appService.changeAdd(this.countryData, change_add_url).subscribe((data) => {
//       console.log(data);
//     });
//   }

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
      // let product_sold_by = parsedHtml.getElementById('sns-availability').innerText.trim();
      // let product_sold_by = parsedHtml.getElementById('merchant-info').innerText.trim();
      let product_quantity_arr = parsedHtml.getElementById('quantity').innerHTML.match(/<option[^>]*>([^<]*)<\/option>/g);
      let product_quantity = product_quantity_arr[product_quantity_arr.length - 1].replace(/(<([^>]+)>)/ig, "").trim();
      // this.product_quantity = parseInt(product_quantity);
      // console.log('sold by');
      // console.log(product_sold_by);
      // console.log('sold by');


      // sns-availability


      // this.product_price = product_price;
      this.product_price = parseFloat(product_price.split('$')[1]);
      this.min_stock = (this.minimum_stock) ? (this.minimum_stock) : '';
      this.mini_price = (this.minimum_price) ? (this.minimum_price) : '';
      this.maxi_price = (this.maximum_price) ? (this.maximum_price) : '';
      this.skucode = (this.sku_code) ? (this.sku_code) : '';
      this.profitmargin = (this.profit_margin) ? (this.profit_margin) : '';
      this.amazoncommision = (this.amazon_commision) ? (this.amazon_commision) : '';
      this.exchangedifference = (this.exchange_difference) ? (this.exchange_difference) : '';
      this.trademakedproduct = (this.trademaked_product) ? (this.trademaked_product) : '';
      this.discountedproduct = (this.discounted_product) ? (this.discounted_product) : '';
      this.requiringselectionproduct = (this.requiring_selection_product) ? (this.requiring_selection_product) : '';
      this.amazonprimeproduct = (this.amazon_prime_product) ? (this.amazon_prime_product) : '';
      this.cloudinventoryproduct = (this.cloud_inventory_product) ? (this.cloud_inventory_product) : '';
      this.criticalbrandedproduct = (this.critical_branded_product) ? (this.critical_branded_product) : '';
      this.SBAtag = (this.SBA_tag) ? (this.SBA_tag) : '';
      this.product = (this.products) ? (this.products) : '';
      console.log(this.SBAtag);
      console.log(this.discountedproduct);
      console.log(this.requiringselectionproduct);
      console.log(this.amazonprimeproduct);
      console.log(this.min_stock);
      console.log(this.mini_price);
      console.log(this.maxi_price);
      console.log(this.skucode);
      console.log(this.profitmargin);
      console.log(this.amazoncommision);
      console.log(this.exchangedifference);
      console.log(this.cloudinventoryproduct);
      console.log(this.criticalbrandedproduct);
      console.log(this.trademakedproduct);

      // if (this.trademakedproduct !== '') {
      //   console.log('trademark product');
      //   console.log(product_brand);
      //   console.log(this.brandlist);
      //  var url1 = 'https://developer.uspto.gov/ibd-api/v1/trademark/documents';
      //   this._appService.gettrademark(url1).subscribe((response) => {
      //     console.log('trade res');
      //     console.log(response);
      //     console.log('trade 1');
      //
      //   });
      //
      //
      //   // if (productbrand !== true) {
      //   //   console.log('var');
      //   //   console.log(productbrand);
      //   //
      //   //   let _result = {
      //   //     'Product Title': product_title,
      //   //     'Price': product_price,
      //   //     'Brand': product_brand,
      //   //     'Quantity': product_quantity
      //   //   };
      //   //
      //   //   this.productList = this.productList.concat(_result);
      //   //   console.log(this.productList);
      //   //   if (is_last === true) {
      //   //     this.downloadCsv();
      //   //   }
      //   // }
      // }
      // if (this.country_list !== null) {
      //   console.log(this.country_list);
      //   console.log('country');
      // }

       if (this.cloudinventoryproduct !== '') {
        console.log('cloud inventory product');
        console.log(product_brand);
        console.log(this.brandlist);

        var brandlist = this.brandlist.split('\n');
        console.log(brandlist);

        var productbrand = this.brandlist.includes( product_brand);
        console.log(productbrand);

        if (productbrand !== true) {
          console.log('var');
          console.log(productbrand);

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
      }

     else if (this.criticalbrandedproduct !== '') {
        console.log('critical brand');
        console.log(product_brand);
        console.log(this.brandlist);

         var brandlist = this.brandlist.split('\n');
        console.log(brandlist);

        var productbrand = this.brandlist.includes( product_brand);
        console.log(productbrand);

        if (productbrand !== true) {
          console.log('var');
          console.log(productbrand);

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
        // });
      }

     else if (this.discountedproduct !== '' && this.requiringselectionproduct !== '' && this.amazonprimeproduct !== '') {
        let product_discounted_price = parsedHtml.getElementById('regularprice_savings');

        let product_amazon_prime = parsedHtml.getElementById('primeUpsellPopover');
        console.log('amazon prime prod');
        console.log(product_amazon_prime);
        console.log('amazon prime prod');

        let product_style_selection = parsedHtml.getElementById('style_name_0');
        let product_color_selection = parsedHtml.getElementById('color_name_0');
        let product_size_selection = parsedHtml.getElementById('size_name_0');
        console.log('requiring select prod');
        console.log(product_style_selection);
        console.log(product_color_selection);
        console.log(product_size_selection);
        console.log('requiring select prod');

        console.log('discounted prod');
        console.log(product_discounted_price);
        console.log('discounted prod');


        if (product_size_selection === null && product_style_selection === null && product_color_selection === null && product_discounted_price === null && product_amazon_prime === null) {
          console.log('if requiring select size style and color prod');

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

        else if (product_size_selection === null && product_style_selection === null && product_color_selection === null && product_discounted_price === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_style_selection === null && product_color_selection === null && product_amazon_prime === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_style_selection === null && product_amazon_prime === null && product_discounted_price === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_style_selection === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_discounted_price === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_amazon_prime === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_amazon_prime === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_discounted_price === null && product_amazon_prime === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_amazon_prime === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_discounted_price === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_discounted_price === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_size_selection === null) {
          console.log('if requiring select color and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_discounted_price === null) {
          console.log('if requiring select color and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_size_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_discounted_price === null && product_size_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_discounted_price === null && product_style_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_color_selection === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_amazon_prime === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_amazon_prime === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_discounted_price === null && product_amazon_prime === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_amazon_prime === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null) {
          console.log('if requiring select style prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null) {
          console.log('if requiring select color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_discounted_price === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_amazon_prime === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection !== null && product_color_selection !== null && product_style_selection !== null && product_discounted_price !== null && product_amazon_prime !== null) {
          if (is_last === true) {
            this.downloadCsv();
          }
        }


      }

      else if (this.discountedproduct !== '' && this.requiringselectionproduct !== '' && this.SBAtag !== '') {
        let product_discounted_price = parsedHtml.getElementById('regularprice_savings');

        let product_sold_by = parsedHtml.getElementById('merchant-info');
        console.log('sold by');
        console.log(product_sold_by);
        console.log('sold by');

        let product_style_selection = parsedHtml.getElementById('style_name_0');
        let product_color_selection = parsedHtml.getElementById('color_name_0');
        let product_size_selection = parsedHtml.getElementById('size_name_0');
        console.log('requiring select prod');
        console.log(product_style_selection);
        console.log(product_color_selection);
        console.log(product_size_selection);
        console.log('requiring select prod');

        console.log('discounted prod');
        console.log(product_discounted_price);
        console.log('discounted prod');


        if (product_size_selection === null && product_style_selection === null && product_color_selection === null && product_discounted_price === null && product_sold_by === null) {
          console.log('if requiring select size style and color prod');

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

        else if (product_size_selection === null && product_style_selection === null && product_color_selection === null && product_discounted_price === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_style_selection === null && product_color_selection === null && product_sold_by === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_style_selection === null && product_sold_by === null && product_discounted_price === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_style_selection === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_discounted_price === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_sold_by === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_sold_by === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_discounted_price === null && product_sold_by === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_sold_by === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_discounted_price === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_discounted_price === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_size_selection === null) {
          console.log('if requiring select color and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_discounted_price === null) {
          console.log('if requiring select color and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_size_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_discounted_price === null && product_size_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_discounted_price === null && product_style_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_color_selection === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_sold_by === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_sold_by === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_discounted_price === null && product_sold_by === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_sold_by === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null) {
          console.log('if requiring select style prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null) {
          console.log('if requiring select color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_discounted_price === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_sold_by === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection !== null && product_color_selection !== null && product_style_selection !== null && product_discounted_price !== null && product_sold_by !== null) {
          if (is_last === true) {
            this.downloadCsv();
          }
        }


      }

      else if (this.amazonprimeproduct !== '' && this.requiringselectionproduct !== '' && this.SBAtag !== '') {
        let product_amazon_prime = parsedHtml.getElementById('primeUpsellPopover');
        console.log('amazon prime prod');
        console.log(product_amazon_prime);
        console.log('amazon prime prod');


        let product_sold_by = parsedHtml.getElementById('merchant-info');
        console.log('sold by');
        console.log(product_sold_by);
        console.log('sold by');

        let product_style_selection = parsedHtml.getElementById('style_name_0');
        let product_color_selection = parsedHtml.getElementById('color_name_0');
        let product_size_selection = parsedHtml.getElementById('size_name_0');
        console.log('requiring select prod');
        console.log(product_style_selection);
        console.log(product_color_selection);
        console.log(product_size_selection);
        console.log('requiring select prod');


        if (product_size_selection === null && product_style_selection === null && product_color_selection === null && product_amazon_prime === null && product_sold_by === null) {
          console.log('if requiring select size style and color prod');

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

        else if (product_size_selection === null && product_style_selection === null && product_color_selection === null && product_amazon_prime === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_style_selection === null && product_color_selection === null && product_sold_by === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_style_selection === null && product_sold_by === null && product_amazon_prime === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_style_selection === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_amazon_prime === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_sold_by === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_sold_by === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_amazon_prime === null && product_sold_by === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_sold_by === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_amazon_prime === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_amazon_prime === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_size_selection === null) {
          console.log('if requiring select color and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_amazon_prime === null) {
          console.log('if requiring select color and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_size_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_amazon_prime === null && product_size_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_amazon_prime === null && product_style_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_color_selection === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_sold_by === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_sold_by === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_amazon_prime === null && product_sold_by === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_sold_by === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null) {
          console.log('if requiring select style prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null) {
          console.log('if requiring select color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_amazon_prime === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_sold_by === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection !== null && product_color_selection !== null && product_style_selection !== null && product_amazon_prime !== null && product_amazon_prime !== null) {
          if (is_last === true) {
            this.downloadCsv();
          }
        }


      }

      else if (this.discountedproduct !== '' && this.requiringselectionproduct !== '') {
        let product_discounted_price = parsedHtml.getElementById('regularprice_savings');

        let product_style_selection = parsedHtml.getElementById('style_name_0');
        let product_color_selection = parsedHtml.getElementById('color_name_0');
        let product_size_selection = parsedHtml.getElementById('size_name_0');
        console.log('requiring select prod');
        console.log(product_style_selection);
        console.log(product_color_selection);
        console.log(product_size_selection);
        console.log('requiring select prod');

        console.log('discounted prod');
        console.log(product_discounted_price);
        console.log('discounted prod');


        if (product_size_selection === null && product_style_selection === null && product_color_selection === null && product_discounted_price === null) {
          console.log('if requiring select size style and color prod');

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

        else if (product_size_selection === null && product_style_selection === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_discounted_price === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_discounted_price === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_discounted_price === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_size_selection === null) {
          console.log('if requiring select color and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_discounted_price === null) {
          console.log('if requiring select color and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_size_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_discounted_price === null && product_size_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_discounted_price === null && product_style_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_discounted_price === null && product_color_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_color_selection === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null) {
          console.log('if requiring select style prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null) {
          console.log('if requiring select color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_discounted_price === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection !== null && product_color_selection !== null && product_style_selection !== null && product_discounted_price !== null) {
          if (is_last === true) {
            this.downloadCsv();
          }
        }


      }

      else if (this.amazonprimeproduct !== '' && this.requiringselectionproduct !== '') {
        let product_amazon_prime = parsedHtml.getElementById('primeUpsellPopover');
        console.log('amazon prime prod');
        console.log(product_amazon_prime);
        console.log('amazon prime prod');

        let product_style_selection = parsedHtml.getElementById('style_name_0');
        let product_color_selection = parsedHtml.getElementById('color_name_0');
        let product_size_selection = parsedHtml.getElementById('size_name_0');
        console.log('requiring select prod');
        console.log(product_style_selection);
        console.log(product_color_selection);
        console.log(product_size_selection);
        console.log('requiring select prod');


        if (product_size_selection === null && product_style_selection === null && product_color_selection === null && product_amazon_prime === null) {
          console.log('if requiring select size style and color prod');

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

        else if (product_size_selection === null && product_style_selection === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_amazon_prime === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_amazon_prime === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_amazon_prime === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_size_selection === null) {
          console.log('if requiring select color and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_amazon_prime === null) {
          console.log('if requiring select color and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_size_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_amazon_prime === null && product_size_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_amazon_prime === null && product_style_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_amazon_prime === null && product_color_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_color_selection === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null) {
          console.log('if requiring select style prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null) {
          console.log('if requiring select color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_amazon_prime === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection !== null && product_color_selection !== null && product_style_selection !== null && product_amazon_prime !== null) {
          if (is_last === true) {
            this.downloadCsv();
          }
        }


      }

      else if (this.SBAtag !== '' && this.requiringselectionproduct !== '') {
        let product_sold_by = parsedHtml.getElementById('merchant-info');
        console.log('sold by');
        console.log(product_sold_by);
        console.log('sold by');

        let product_style_selection = parsedHtml.getElementById('style_name_0');
        let product_color_selection = parsedHtml.getElementById('color_name_0');
        let product_size_selection = parsedHtml.getElementById('size_name_0');
        console.log('requiring select prod');
        console.log(product_style_selection);
        console.log(product_color_selection);
        console.log(product_size_selection);
        console.log('requiring select prod');


        if (product_size_selection === null && product_style_selection === null && product_color_selection === null && product_sold_by === null) {
          console.log('if requiring select size style and color prod');

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

        else if (product_size_selection === null && product_style_selection === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_sold_by === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null && product_sold_by === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_sold_by === null && product_style_selection === null) {
          console.log('if requiring select size style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_size_selection === null) {
          console.log('if requiring select color and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null && product_sold_by === null) {
          console.log('if requiring select color and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_size_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_sold_by === null && product_size_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_sold_by === null && product_style_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_sold_by === null && product_color_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_color_selection === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null) {
          console.log('if requiring select style prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null) {
          console.log('if requiring select color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_sold_by === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection !== null && product_color_selection !== null && product_style_selection !== null && product_sold_by !== null) {
          if (is_last === true) {
            this.downloadCsv();
          }
        }


      }

      else if (this.discountedproduct !== '' && this.amazonprimeproduct !== '') {
        let product_discounted_price = parsedHtml.getElementById('regularprice_savings');
        let product_amazon_prime = parsedHtml.getElementById('primeUpsellPopover');

        console.log('discounted prod');
        console.log(product_discounted_price);
        console.log('discounted prod');

        console.log('amazon prime prod');
        console.log(product_amazon_prime);
        console.log('amazon prime prod');


        if (product_discounted_price === null && product_amazon_prime === null) {
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
        } else {
          if (is_last === true) {
            this.downloadCsv();
          }
        }
      }

      else if (this.discountedproduct !== '' && this.SBAtag !== '') {
        let product_discounted_price = parsedHtml.getElementById('regularprice_savings');
        let product_sold_by = parsedHtml.getElementById('merchant-info');

        console.log('discounted prod');
        console.log(product_discounted_price);
        console.log('discounted prod');

        console.log('sold by');
        console.log(product_sold_by);
        console.log('sold by');

        if (product_discounted_price === null && product_sold_by === null) {
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
        } else {
          if (is_last === true) {
            this.downloadCsv();
          }
        }
      }

      else if (this.amazonprimeproduct !== '' && this.SBAtag !== '') {
        let product_amazon_prime = parsedHtml.getElementById('primeUpsellPopover');
        console.log('amazon prime prod');
        console.log(product_amazon_prime);
        console.log('amazon prime prod');

        let product_sold_by = parsedHtml.getElementById('merchant-info');


        console.log('sold by');
        console.log(product_sold_by);
        console.log('sold by');

        if (product_amazon_prime === null && product_sold_by === null) {
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
        } else {
          if (is_last === true) {
            this.downloadCsv();
          }
        }
      }

      else if (this.discountedproduct !== '') {
        console.log('if discounted prod');

        let product_discounted_price = parsedHtml.getElementById('regularprice_savings');
        console.log('discounted prod');
        console.log(product_discounted_price);
        console.log('discounted prod');

        if (product_discounted_price === null) {
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
        } else {
          console.log('else discounted prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

      }

      else if (this.requiringselectionproduct !== '') {
        // a-padding-mini
        console.log('requiring select prod');

        let product_style_selection = parsedHtml.getElementById('style_name_0');
        let product_color_selection = parsedHtml.getElementById('color_name_0');
        let product_size_selection = parsedHtml.getElementById('size_name_0');
        console.log('requiring select prod');
        console.log(product_style_selection);
        console.log(product_color_selection);
        console.log(product_size_selection);
        console.log('requiring select prod');

        if (product_size_selection === null && product_style_selection === null && product_color_selection === null) {
          console.log('if requiring select size style and color prod');

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

        else if (product_color_selection === null && product_size_selection === null) {
          console.log('if requiring select color and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_size_selection === null) {
          console.log('if requiring select style and size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null && product_color_selection === null) {
          console.log('if requiring select style and color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_style_selection === null) {
          console.log('if requiring select style prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_color_selection === null) {
          console.log('if requiring select color prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection === null) {
          console.log('if requiring select size prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

        else if (product_size_selection !== null && product_color_selection !== null && product_style_selection !== null) {
          if (is_last === true) {
            this.downloadCsv();
          }
        }
      }

      else if (this.amazonprimeproduct !== '') {
        console.log('if amazon prime prod');

        let product_amazon_prime = parsedHtml.getElementById('primeUpsellPopover');
        console.log('amazon prime prod');
        console.log(product_amazon_prime);
        console.log('amazon prime prod');

        if (product_amazon_prime === null) {
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
        } else {
          console.log('else amazon prime prod');

          if (is_last === true) {
            this.downloadCsv();
          }
        }

      }

      else if (this.SBAtag !== '') {
        let product_sold_by = parsedHtml.getElementById('merchant-info');
        console.log('sold by');
        console.log(product_sold_by);
        console.log('sold by');

        console.log('if unlist sold by product');
        if (product_sold_by === null) {
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
        } else {
          console.log('else unlist sold by product');
          if (is_last === true) {
            this.downloadCsv();
          }
        }

      }

      else if (this.profitmargin !== '' && this.amazoncommision !== '' && this.exchangedifference !== '' && this.skucode !== '') {


        let _result1 = {
          'Product Title': product_title,
          'Price': product_price,
          'Brand': product_brand,
          'Quantity': product_quantity
        };

        this.productList1 = this.productList1.concat(_result1);
        console.log(this.productList);
        let sku_code1 = this.sku_code + '1000' + this.productList1.length;
        console.log(sku_code1);

        this.pro_margin = ((this.product_price * this.profit_margin) / 100 );
        this.ama_commision = ((this.product_price * this.amazon_commision) / 100 );
        this.exch_difference = (this.product_price * this.exchange_difference);


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

      else if (this.min_stock != null && parseInt(product_quantity) >= this.minimum_stock && this.mini_price !== '' && this.maxi_price !== '') {
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

      else if (this.min_stock != null && parseInt(product_quantity) >= this.minimum_stock) {
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

      else if (this.mini_price !== '' && this.maxi_price !== '' && this.min_stock === '') {
        console.log('min max price');

        this.min_price = this.product_price - ((this.product_price * this.minimum_price) / 100 );
        this.max_price = this.product_price + ((this.product_price * this.maximum_price) / 100 );
        console.log(this.min_price);
        console.log(this.max_price);
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

      else if (this.mini_price === '' && this.maxi_price === '' && this.min_stock === '' && this.skucode === '' && this.profitmargin === '' && this.exchangedifference === '' && this.SBAtag === '' && this.discountedproduct === '' && this.requiringselectionproduct === '' && this.amazonprimeproduct === '' && this.cloudinventoryproduct === '' && this.criticalbrandedproduct === '') {
        console.log('all null ');

        this.min_price = this.product_price - ((this.product_price * this.minimum_price) / 100 );
        this.max_price = this.product_price + ((this.product_price * this.maximum_price) / 100 );
        console.log(this.min_price);
        console.log(this.max_price);
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

    } else if (this.profitmargin !== '' && this.amazoncommision !== '' && this.exchangedifference !== '' && this.skucode !== '') {
      var head = ['Product Title', 'Price', 'Brand', 'Quantity', 'SKU Code', 'Profit Margin', 'Amazon Commision', 'Exchange Difference (CAD)'];

    } else {
      var head = ['Product Title', 'Price', 'Brand', 'Quantity'];
    }
    console.log(this.product);
    if (this.product !== '') {
      new Angular5Csv(this.productList, this.product, {headers: (head)});
      this.overlaypopup = false;
    } else {
    new Angular5Csv(this.productList, 'My Reports', {headers: (head)});
    this.overlaypopup = false;
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

  edit() {
    this.editbox = true;
    // this.brandModal = this.modalService.open(this.edit_brand, {centered: true});
  }

  save() {
    console.log(this.brandlist);

    const blob = new Blob([this.brandlist], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, 'critical-brand.json');

    // $http.post("http-post.json",{'id': id,'name': $scope.name})
    //   .success(function(response) {
    //     this.usersData = response.users;
    //   });
    // this.brandModal.close();
    this.editbox = false;

  }

  loadNavItems() {
    this.http.get("/assets/critical-brand.json").subscribe(response => {
        console.log(response);
      this.brands = response;

      var k;
        for (k = 0; k <  this.brands.length; k++) {
          console.log(k);
          var result =  this.brands[k].name;
          // console.log(this.brandlist.name);
          this.brandlist = this.brandlist.concat(result);
          console.log( this.brandlist);
          // var brandlist =  this.brands.replace(',', "\n");
          // this.brandlist = this.brandlist.concat(brandlist);
          // console.log(this.brandlist);

        }

    });

  }

  handleWalletCancel() {
    this.brandModal.close();
    // this.walletAmount = {};
  }
}
