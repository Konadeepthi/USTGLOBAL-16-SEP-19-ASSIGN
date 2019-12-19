import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DisplayRequestedService {

  constructor(private http: HttpClient) { }
  getRequestedData(): Observable<any> {
    return this.http.get('http://localhost:8081/librarypro/showrequestedbooks');
  }
  getIssuedData(): Observable<any> {
    return this.http.get('http://localhost:8081/librarypro/showissuedbooks');
  }
}
