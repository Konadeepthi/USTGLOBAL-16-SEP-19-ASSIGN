import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  error: any;
  constructor( private http: HttpClient,private add: BookService,private router: Router) { }
  addBook(addBookForm: NgForm) {
    this.http.post(`${this.add.baseURL}/addbook`, addBookForm.value).subscribe(response => {
    if (response != null) {
      alert('Book Added');
      this.router.navigate(['/display-book']);
    } else {
      alert('Failed to add book');
    }
    });
  }
    ngOnInit() {
  }

}
