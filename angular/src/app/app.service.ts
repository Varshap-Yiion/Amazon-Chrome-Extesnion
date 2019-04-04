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
}
