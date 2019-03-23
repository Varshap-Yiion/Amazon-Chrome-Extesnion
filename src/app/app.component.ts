import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommonService} from "./core/common.service";
import * as $ from 'jquery';
import {stringDistance} from "codelyzer/util/utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public asinList: any = [];
  public from_page: number;
  public to_page: number;

  constructor(private _commonService: CommonService) {
  }

  ngOnInit() {

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
    let mainURL = 'https://www.amazon.com/s?k=cable&i=electronics-intl-ship&ref=nb_sb_noss';
    this.asinList = [];
    for (let i = this.from_page; i <= this.to_page; i++) {
      let perms = '&page=' + i;
      let url = mainURL + perms;
      let result = this.getAsinList(url);
      this.asinList = this.asinList.concat(result);
    }
    console.log(this.asinList);
  }
}
