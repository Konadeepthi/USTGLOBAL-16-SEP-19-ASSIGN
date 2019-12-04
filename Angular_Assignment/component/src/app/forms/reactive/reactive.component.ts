import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  form = new FormGroup({
    email : new FormControl('',[Validators.required]),
    password : new FormControl('', [Validators.required])
  })
  send(form){
    console.log(form.value);
  }
}
