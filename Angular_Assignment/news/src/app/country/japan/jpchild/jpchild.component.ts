import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jpchild',
  templateUrl: './jpchild.component.html',
  styleUrls: ['./jpchild.component.css']
})
export class JpchildComponent implements OnInit {

  constructor() { }
  @Input() selectedNews;
  ngOnInit() {
  }

}
