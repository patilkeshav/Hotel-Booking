import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 baseUrl:string=environment.baseUrl
 httpHeader:HttpHeaders= new HttpHeaders().
                                     set("Content-type","application/json")
  constructor(private http:HttpClient) {}

   getDataFromServer(endpoint:string){
     const url=this.baseUrl+endpoint;
    return this.http.get(url,{headers:this.httpHeader})
   }
   postDataToServer(endpoint:string,data:any){
    const Url=this.baseUrl+endpoint
    return this.http.post(Url,data,{headers:this.httpHeader})
}
}
