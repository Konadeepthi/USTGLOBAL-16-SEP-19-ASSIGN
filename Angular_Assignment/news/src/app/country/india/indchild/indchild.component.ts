import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-indchild',
  templateUrl: './indchild.component.html',
  styleUrls: ['./indchild.component.css']
})
export class IndchildComponent implements OnInit {

  constructor() { }
@Input() selectedNews;
  ngOnInit() {
  }

}
