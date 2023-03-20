import { of as observableOf, throwError as observableThrowError, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Service to provide base CRUD methods to make api request.
 *
 */
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl: 'https://staging.sunbirded.org/';
  /**
   * angular HttpClient
   */
  http: HttpClient;
  /**
   * Constructor
   * @param "HttpClient" http HttpClient reference
   */
  appVersion: string;
  constructor(http: HttpClient) {
    this.http = http;
  }
  /**
   * for making post api calls
   */
  post(requestParam: any): Observable<any> {
    const httpOptions: any = {
      headers: requestParam.header,
      params: requestParam.param
    };
    return this.http.post('http://localhost:5000/' + requestParam.url, requestParam.data, httpOptions).pipe(
      mergeMap((data: any) => {
        if (data.responseCode !== 'OK') {
          return observableThrowError(data);
        }
        return observableOf(data);
      }));
  }
}
