import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductResponse } from './product-response';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  books: ProductResponse;

  constructor(private http: HttpClient,
    private router: Router,
    private service: ProductService) { }

  ngOnInit() {
  }
  getStudentInfo(deleteStuduent: NgForm) {
    this.http.get<ProductResponse>(`${this.service.baseURL}/searchbyname/${deleteStuduent.value.name}`)
      .subscribe(response => {
        if (response!=null) {
          alert('Student Data Found');
          this.books=response;
        } else {
          alert('No Student Data Present ');
        }
        console.log(response);
      });
  }

  deleteStudent(bid) {
    console.log(bid);
    this.http.delete(`${this.service.baseURL}/deletebook/${bid}`)
      .subscribe(response => {
        if (response) {
          alert('Student Deleted successfully');
          console.log(response);
        } else {
          alert('Failed to delete the Student');
          this.router.navigate(['/']);
        }
      });

  }
}
