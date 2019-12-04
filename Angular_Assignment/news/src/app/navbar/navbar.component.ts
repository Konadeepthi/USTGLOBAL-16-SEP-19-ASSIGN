import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
search;
  constructor(public service: UserserviceService) { }

  ngOnInit() {
  }
fun(arg){
  this.search=arg.target.value;
  // console.log(this.search);
  this.service.search=this.search;
}
callFun() {
  this.service.callService();
}
}
