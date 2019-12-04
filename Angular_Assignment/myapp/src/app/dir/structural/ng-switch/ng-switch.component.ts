import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  color = 'red';
  constructor() {
    setInterval(() => {
      this.color = 'yellow';
      }, 2000);
  }

  ngOnInit() {  }

}
