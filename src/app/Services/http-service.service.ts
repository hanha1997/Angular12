import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private REST_API_SERVER = 'http://localhost:3000';
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    observe: 'response' as 'body'
  };
  constructor(private httpClient: HttpClient) { }
  public getComments(): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    // @ts-ignore
    return this.httpClient.get<any>(url, this.httpOptions)
  }

  public postComments(payload: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    console.log(payload);
    return this.httpClient.post<any>(url,payload, this.options);
  }
}
