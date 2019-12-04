import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comchild',
  templateUrl: './comchild.component.html',
  styleUrls: ['./comchild.component.css']
})
export class ComchildComponent implements OnInit {

  @Output() getComment = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendCom(form) {
    console.log("comment",form.value);
    this.getComment.emit(form.value);
  }

}
