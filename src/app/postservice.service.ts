import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders,HttpParams } from '@angular/common/http'
//import {Headers} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  httpParams: HttpParams = new HttpParams();
  url:any="http://localhost:9391/tibua/save";
  constructor(private http: HttpClient) { }

  save(station:number,route:number)
  {
  
    return this.http.get<any>(url,{"station":station,"route":route});    
    
   
  }
}
