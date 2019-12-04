import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
   name = 'John';
   imgu = 'https://cdn.pixabay.com/photo/2019/09/27/14/38/zoo-4508682__340.jpg';
   address = 'rajajinagara,bangalore';
   colorname = 'blue';
   isActive = false;
   colval = 2;
   val: string;
  constructor() { }
  printAlert() {
    alert('click me button');
  }
input(arg) {
  this.val = arg.target.value;
  console.log( this.val );
}
  ngOnInit() {
    setInterval(() => {
      this.colorname = 'red';
      this.isActive = !this.isActive;
    }, 2000);
  }

}
