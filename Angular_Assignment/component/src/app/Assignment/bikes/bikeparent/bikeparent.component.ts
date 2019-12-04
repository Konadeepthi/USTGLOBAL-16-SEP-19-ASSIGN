import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikeparent',
  templateUrl: './bikeparent.component.html',
  styleUrls: ['./bikeparent.component.css']
})
export class BikeparentComponent implements OnInit {
  selectedBikes;
  bikes = [{
    Url : 'https://cdn.pixabay.com/photo/2016/01/19/16/46/motorcycle-1149389__340.jpg',
    name : 'BMW',
    model : 'Model : 1945',
    desc : 'The Maruti Swift has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1248 cc while the Petrol engine is 1197 cc. Depending upon the variant and fuel type the Swift has a mileage of 22.0 to 28.4 kmpl. The Swift is a 5 seater Hatchback and has a length of 3840mm.'
  }, {
    Url : 'https://cdn.pixabay.com/photo/2016/03/27/17/59/vintage-1283299__340.jpg',
    name : 'Yamaha',
    model : 'Model : 1885',
    desc : 'The Lamborghini Swift has 1 Lamborghini Engine and 1 Lamborghini Engine on offer. The Diesel engine is 5000 cc while the Petrol engine is 5000 cc. Depending upon the variant and fuel type the Swift has a mileage of 3.0 to 5.0 kmpl. The Swift is a 5 seater Hatchback and has a length of 5000.'
  }, {
    Url : 'https://cdn.pixabay.com/photo/2015/08/27/09/06/bike-909690__340.jpg',
    name : 'Royal Enfield',
    model : 'Model : 2017',
    desc : 'BMW cars price starts at Rs. 35.20 lakh for the cheapest car X1 and goes up to Rs. 2.43 crore for the top model BMW 7 Series. BMW offers 14 new car models in India. X1 (Rs. 35.20 lakh), Z4 (Rs. 64.90 lakh) and 3 Series GT (Rs. 47.70 lakh) are among the popular cars from BMW.'
  }, {
    Url : 'https://cdn.pixabay.com/photo/2013/11/12/16/36/dirt-bike-209489__340.jpg',
    name : 'Suzuki',
    model :'Model : 2010',
    desc : 'The Suzuki has 1 kerosine Engine and 1 Diesel Engine on offer. The Diesel engine is 1248 cc while the kersine engine is 466 cc. Depending upon the variant and fuel type the Swift has a mileage of 22.0 to 28.4 kmpl. The Suzuki is a 5 seater Hatchback and has a length of 3840mm.'
  }, {
    Url : 'https://cdn.pixabay.com/photo/2016/11/18/21/30/bike-1836962__340.jpg',
    name : 'Honda',
    model : 'Model : 2015',
    desc : 'Audi A3 Variants & Price: The Audi A3 is available in two variants: Premium Plus and Technology, priced from Rs 28.99 lakh to 31.99 lakh (ex-showroom pan-India). Audi A3 Engines: The A3 comes with a 1.4-litre TFSI turbocharged petrol engine that makes 150PS of power and 250Nm.'
  } ];

  constructor() { }

  ngOnInit() {
  }
  bikesFun(bike) {
    this.selectedBikes = bike;
  }

}
