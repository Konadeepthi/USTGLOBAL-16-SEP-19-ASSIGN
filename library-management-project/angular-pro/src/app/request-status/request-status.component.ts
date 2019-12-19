import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { HttpClient } from '@angular/common/http';
import { BookTransactionResponse } from './book-transaction-response';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent implements OnInit {
  transactions: BookTransactionResponse;

  constructor(private service: BookService,
    private http: HttpClient) { }
    id=null;
    getRequestStatusInfo(requestStatusInfo: NgForm) {
      this.http.get<BookTransactionResponse>(`${this.service.baseURL}/library/student/book/requsetStatus/${requestStatusInfo.value.id}`)
        .subscribe(response => {
          if (response != null) {
            alert('Request Accepted Succefully');
          } else {
            alert('Request denyed for ID ' + requestStatusInfo.value.id);
          }
          this.transactions = response;
          console.log(response);
        });
    }

  ngOnInit() {
  }

}
