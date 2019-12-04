import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidation } from './custom.validation';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  users;
  fire='https://myproject-ba4fc.firebaseio.com/';
get email(){
 return this.form.get('email');
}
get password(){
  return this.form.get('password');
}
  constructor(public http:HttpClient) { 
    this.getdata();
  }
form = new FormGroup({
  email : new FormControl('', [Validators.required,CustomValidation.unique]),
  password : new FormControl('', [Validators.required])
});
  ngOnInit() {
  }
  getdata(){
    this.users=this.getData();
  }
  passData(form){
    //this.users.push(form.value);
    console.log(form.value);
    this.postdata(form.value);
  }
  postdata(data){
    return this.http.post(`${this.fire}/Login.json`,data).subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    },()=>{
      console.log("dta got"); 
       })
  }
  getData(){
    this.http.get(`${this.fire}/Login.json`).pipe(
      map(data=>{
        let array=[];
        for(let key in data){
        array.push({...data[key], id : key})
      }
      return array;
      })
    )
  }
}
