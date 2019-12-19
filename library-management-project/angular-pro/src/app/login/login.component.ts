import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,private add: BookService,private router: Router) { }
  login(loginForm : NgForm){
    this.http.post(`${this.add.baseURL}/login`, loginForm.value).subscribe(response => {
      if (response != null) {
        alert('Login Successful');
        this.router.navigate(['/add-book']);
      } else {
        alert('Failed to login');
      }
      });
    }
  ngOnInit() {
  }

}
