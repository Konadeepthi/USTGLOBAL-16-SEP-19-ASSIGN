import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient,private add: BookService,private router: Router) { }
  register(registerForm: NgForm) {
    this.http.post(`${this.add.baseURL}/registeruser`, registerForm.value).subscribe(response => {
    if (response != null) {
      alert('user registered successfuly');
      this.router.navigate(['/login']);
    } else {
      alert('Failed to add book');
    }
    });
  }

  ngOnInit() {
  }

}
