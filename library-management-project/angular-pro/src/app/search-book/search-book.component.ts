import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginResponse } from './login';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  studentData: LoginResponse;
  books: LoginResponse;
 
  constructor(private http: HttpClient,
    private router: Router,
    private service: BookService) { }

  ngOnInit() {
  }
  getStudentInfo(deleteStuduent: NgForm) {
    this.http.get<LoginResponse>(`${this.service.baseURL}/searchbook/${deleteStuduent.value.bid}`)
      .subscribe(response => {
        if (response != null) {
          // alert('Student Data Found');
          this.books=response;
          this.studentData=response;
        } else {
          alert('No Student Data Present for ID ' + deleteStuduent.value.id);
        }
        this.studentData = response;
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
