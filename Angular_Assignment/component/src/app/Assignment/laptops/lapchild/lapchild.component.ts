import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lapchild',
  templateUrl: './lapchild.component.html',
  styleUrls: ['./lapchild.component.css']
})
export class LapchildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Input() lap;

}
