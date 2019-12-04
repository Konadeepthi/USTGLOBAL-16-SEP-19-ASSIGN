import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chchild',
  templateUrl: './chchild.component.html',
  styleUrls: ['./chchild.component.css']
})
export class ChchildComponent implements OnInit {

  constructor() { }
  @Input() selectedNews;
  ngOnInit() {
  }

}
