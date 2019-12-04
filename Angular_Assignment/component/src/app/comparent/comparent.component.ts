import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparent',
  templateUrl: './comparent.component.html',
  styleUrls: ['./comparent.component.css']
})
export class ComparentComponent implements OnInit {
  comments: any[] = [];
  constructor() { }

  ngOnInit() {
  }
  getCom(event){
    console.log("comments==",event);
    this.comments.push(event);
  }

}
