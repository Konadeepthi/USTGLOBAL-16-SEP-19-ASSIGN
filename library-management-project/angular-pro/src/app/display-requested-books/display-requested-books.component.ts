import { Component, OnInit } from '@angular/core';
import { DisplayServiceService } from '../display-service.service';
import { DisplayRequestedService } from '../display-requested.service';

@Component({
  selector: 'app-display-requested-books',
  templateUrl: './display-requested-books.component.html',
  styleUrls: ['./display-requested-books.component.css']
})
export class DisplayRequestedBooksComponent implements OnInit {
books;
  constructor(myService: DisplayRequestedService) {
    console.log('Hi from Products Component');
    myService.getRequestedData()
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
