import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders,HttpParams } from '@angular/common/http'
//import {Headers} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  httpParams: HttpParams = new HttpParams();
  url:any="http://sendpost-route-saadrahmanwarsi-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com";
  constructor(private http: HttpClient) { }

  save(station:number,route:number)
  {
    this.url=this.url+"/"+station+"/"+route;
    return this.http.get<any>(this.url);    
    
   
  }
}
