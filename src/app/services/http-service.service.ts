import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http'
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import 'rxjs';

@Injectable()
export class HttpServiceService {

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get('https://terriblytinytales.com/test.txt', { responseType: 'text'}).pipe(
      catchError(this.handleError)
    )
  }

  handleError(err: HttpErrorResponse) {
    console.log('Error is: ', err);
    return throwError(err);
  }
}
