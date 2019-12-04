import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-uschild',
  templateUrl: './uschild.component.html',
  styleUrls: ['./uschild.component.css']
})
export class UschildComponent implements OnInit {

  constructor() { }
@Input() selected;
  ngOnInit() {
  }

}
