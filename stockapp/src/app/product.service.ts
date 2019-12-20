import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = 'http://localhost:8080';
  header = new HttpHeaders({'content-type' : 'application/json'});

  constructor() { }
}
