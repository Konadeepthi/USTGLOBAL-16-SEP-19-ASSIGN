import { Component, OnInit } from '@angular/core';
import { DisplayRequestedService } from '../display-requested.service';

@Component({
  selector: 'app-show-issued-books',
  templateUrl: './show-issued-books.component.html',
  styleUrls: ['./show-issued-books.component.css']
})
export class ShowIssuedBooksComponent implements OnInit {
  books: any;

  constructor(myService: DisplayRequestedService) {
    console.log('Hi from Products Component');
    myService.getIssuedData()
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
