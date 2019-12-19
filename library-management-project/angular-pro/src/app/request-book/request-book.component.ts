import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-request-book',
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent implements OnInit {

  constructor(private http: HttpClient,private add: BookService,private router: Router) { }
  requestBook(requestBookForm: NgForm) {
    this.http.post(`${this.add.baseURL}/requestingbook`, requestBookForm.value).subscribe(response => {
    if (response != null) {
      alert('Book request saved');
      this.router.navigate(['/request-status']);
    } else {
      alert('Failed to save the request');
    }
    });
  }


  ngOnInit() {
  }

}
