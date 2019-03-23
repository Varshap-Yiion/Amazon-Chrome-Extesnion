import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {Http} from "@angular/http";

@Injectable()
export class CommonService {

  constructor(private _http: Http) {
  }

  public getProductList(): Observable<any> {
    //http://localhost/s?k=cable&i=electronics-intl-ship&ref=nb_sb_noss
    return this._http.get('http://localhost/brian/angular-extension-master/search.html');
  }
}
