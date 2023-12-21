import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { catchError,throwError } from 'rxjs';
import { Respose } from './model/Response';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {
  url:string="####ENTER THE URL HERE####" 
  constructor(private http: HttpClient) { }
  getEmployeeById()
  {
      
      var headers=new Headers();
      headers.append('Content-Type','application/json');
      return this.http.get<Respose>(this.url+"/tibua/").pipe(catchError(this.errorhandler))
  }
  errorhandler(error: HttpErrorResponse)
  {
      return throwError(error.message || "server error");
      
  }
}
