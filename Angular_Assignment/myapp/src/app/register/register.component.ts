import { Component, OnInit, DoCheck, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, DoCheck, AfterViewChecked, AfterViewInit, OnDestroy {
  users;
  selectedUser;
  today = new Date();
  constructor(public service: UserserviceService) {
    this.getData();
    console.log('constructor is executing');
   }
   ngOnDestroy(){
    console.log('ngOnDestroy is executing');

   }
   ngAfterViewChecked(){
    console.log('ngAfterViewChecked is executing');

   }
   ngAfterViewInit(){
    console.log('ngAfterViewInit is executing');

   }
   ngDoCheck(){
     console.log('docheck is executing');
   }

  ngOnInit() {
    console.log('ngOnInit executing');
  }
  loginData(form: NgForm) {
    console.log(form.value);
    this.service.postUser(form.value); 
  }
  getData() {
    this.service.getUser().subscribe(data => {
      console.log(data);
      this.users=data;
      
    }, err => {
      console.log(err);
    }, () => {
      console.log('data get successfully');
    });
  }
  deleteData(user) {
    console.log(user);
    this.service.deleteUser(user.id).subscribe(data=>{
      console.log(data);
      this.getData();
    }, err=>{
      console.log(err);
    }, () => {
      console.log("deleted successfully");
    })
  }
  passUser(user){
    this.selectedUser=user;
    console.log(this.selectedUser);

  }
  updateData(form) {
    console.log(form.value);
    this.service.updateUser(form.value.id, form.value).subscribe(data=>{
      console.log(data);
    }, err=>{
      console.log(err);
    },()=>{
      console.log("data updated successfully");
    })
  }

}
