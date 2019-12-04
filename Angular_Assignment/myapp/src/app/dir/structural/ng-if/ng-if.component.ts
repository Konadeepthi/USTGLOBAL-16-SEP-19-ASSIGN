import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  show = false;
  users = [{
    name: 'ram',
    image : 'https://cdn.pixabay.com/photo/2019/09/14/12/40/iceland-4475920__340.jpg',
    adress : 'tumkur'
  }, {
    name: 'kumar',
    image : 'https://cdn.pixabay.com/photo/2019/09/30/18/41/taxi-4516525__340.jpg',
    adress : 'tumkur'
  }, {
    name: 'Madhu',
    image : 'https://cdn.pixabay.com/photo/2019/09/30/19/20/caravansary-4516601__340.jpg',
    adress : 'tumkur'
  }, {
    name: 'Darshan',
    image : 'https://cdn.pixabay.com/photo/2019/09/15/07/38/elephant-4477530__340.jpg',
    adress : 'tumkur'
  }];
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    }, 2000);
  }

}
