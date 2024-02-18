import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {interval, Observable, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000/api/data';
  private refreshInterval = 2000; // 2 seconds


  constructor(private http:HttpClient) { }

  getData(realTime: boolean):Observable<any>{
    if (!realTime) {
      return this.http.get(this.apiUrl);
    }
    return interval(this.refreshInterval).pipe(
      switchMap(() => this.http.get(this.apiUrl))
    );
  }
}
