import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders,HttpParams } from '@angular/common/http'
//import {Headers} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  httpParams: HttpParams = new HttpParams();
  url:any="### ENTER THE URL HERE ###";
  constructor(private http: HttpClient) { }

  save(station:number,route:number)
  {
  
    return this.http.get<any>(this.url+"/tibua/save",{"station":station,"route":route});    
    
   
  }
}
