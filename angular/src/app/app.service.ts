import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, */*',
    })
  };

  constructor(private _http: HttpClient) {

  }

  getURLData(url): Observable<any> {
    return this._http.get(url, {responseType: 'text'});
  }

  changeAdd(locationType: string, district: string, countryCode: string, changeAddUrl): Observable<any> {
    let countryBody = `locationType=${locationType}&district=${district}&countryCode=${countryCode}`;
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this._http.post(changeAddUrl, countryBody,  {headers: headers });
  }

}
