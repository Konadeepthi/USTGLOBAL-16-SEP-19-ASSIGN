import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {
  match =  false;
  constructor() { }
  addUser(form: NgForm) {
    const pass = form.value;
    if (pass.password !== pass.cpassword) {
      this.match = true;
    } else {
      console.log(form.value);
    }
  }

  ngOnInit() {
  }

}
