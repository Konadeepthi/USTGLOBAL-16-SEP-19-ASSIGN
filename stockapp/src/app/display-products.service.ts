import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DisplayProductsService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get('http://localhost:8080/get-all');
  }
}
