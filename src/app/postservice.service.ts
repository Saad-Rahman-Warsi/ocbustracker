import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders,HttpParams } from '@angular/common/http'
//import {Headers} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  httpParams: HttpParams = new HttpParams();
  url_b:any="http://ocbustracker-60-saadrahmanwarsi-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/registerbus/";
  constructor(private http: HttpClient) { }

  save(station:number,route:number)
  {
    var url:any=this.url_b+"/"+station+"/"+route;
    return this.http.get<any>(url);    
    
   
  }
}
