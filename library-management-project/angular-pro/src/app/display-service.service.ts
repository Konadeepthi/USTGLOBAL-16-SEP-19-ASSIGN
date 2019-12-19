import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DisplayServiceService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get('http://localhost:8081/librarypro/showbooks');
  }
}
