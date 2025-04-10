import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
const url=environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ApicallService {
constructor(private http: HttpClient) { }
get(controllerName:string,functionName:string){
this.http.get(`${url}`)

}


}