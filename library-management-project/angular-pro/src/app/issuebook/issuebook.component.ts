import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent implements OnInit {

  constructor(private http: HttpClient,private add: BookService,private router: Router) { }
  issueBook(issueBookForm: NgForm) {
    this.http.post(`${this.add.baseURL}/issuedbook`, issueBookForm.value).subscribe(response => {
    if (response != null) {
      alert('Book Issued');
      this.router.navigate(['/show-issued-books']);
    } else {
      alert('Failed to issue the book');
    }
    });
  }

  ngOnInit() {
  }

}
