import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseURL = 'http://localhost:8081/librarypro';
  header = new HttpHeaders({'content-type' : 'application/json'});
  constructor(private http: HttpClient) { }
}
