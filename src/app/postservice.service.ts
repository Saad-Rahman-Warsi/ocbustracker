import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders,HttpParams } from '@angular/common/http'
import {Headers} from 'angular2/http';


@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  httpParams: HttpParams = new HttpParams();
  url:any="/registerbus";
  constructor(private http: HttpClient) { }

  save(station:number,route:number)
  {
   // const headers = new HttpHeaders().set();
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin" , '*');
    headers.append('Access-Control-Allow-Methods ',' POST');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('Access-Control-Allow-Headers' ,'Authorization,Accept,Origin,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range');
     
    return this.http.post<any>(this.url,{"station":station,"route":route},{
       headers: headers
     });    
    
   
  }
}
