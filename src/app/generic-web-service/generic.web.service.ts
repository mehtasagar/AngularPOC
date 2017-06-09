import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { LegModal } from '../modal/LegModal';

@Injectable()
export class GenericWebService {
  constructor(private http: Http) { }


  callLocalSpringBoot(urlParm: string): Observable<String[]> {
    return this.http.get(urlParm)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error Calling SpringBoot'));
  }

  callDowGetLegs(urlParm: string): Observable<LegModal[]> {
    return this.http.get(urlParm)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error Calling GetLegs'));
  }



}