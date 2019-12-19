import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BookResponse } from 'src/BookResponse';
import { DisplayServiceService } from '../display-service.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {
  books;
  constructor(myService: DisplayServiceService) {
    console.log('Hi from Products Component');
    myService.getData()
    .subscribe(responseData => {
      console.log('this is my data');
      console.log(responseData);
      this.books = responseData;
    }, error => {
      console.log(error);
    });
    console.log('subscription ended');
  }
  ngOnInit() {
  }
}
