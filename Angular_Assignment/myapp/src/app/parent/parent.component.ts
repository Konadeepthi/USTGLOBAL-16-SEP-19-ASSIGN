import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  selectedCar;
  cars = [{
    name : 'Audi',
    Url : 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg'
  }, {
    name : 'Benz',
    Url : 'https://cdn.pixabay.com/photo/2012/11/02/13/02/ford-63930__340.jpg'},
    {
    name : 'BMW',
    Url : 'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg' },
    {
    name : 'Suzuki',
    Url : 'https://cdn.pixabay.com/photo/2013/08/11/03/40/corvette-171422__340.jpg'} ];
  constructor() { }

  ngOnInit() {
  }
  sendCar(car) {
    this.selectedCar = car;
    console.log(car);
  }

}
