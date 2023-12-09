import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders,HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  httpParams: HttpParams = new HttpParams();
  url:any="http://apigateway-route-saadrahmanwarsi-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/tibua/save/";
  constructor(private http: HttpClient) { }

  save(station:number,route:number)
  {
   // const headers = new HttpHeaders().set();
     return this.http.post<any>(this.url,{"station":station,"route":route});    
    
   
  }
}
