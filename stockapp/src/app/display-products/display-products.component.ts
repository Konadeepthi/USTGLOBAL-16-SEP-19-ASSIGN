import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { DisplayProductsService } from '../display-products.service';
import { ProductResponse } from '../search/product-response';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
products : ProductResponse;
constructor(myService: DisplayProductsService) {
  console.log('Hi from Products Component');
  myService.getData()
  .subscribe(responseData => {
    console.log('this is my data');
    console.log(responseData);
    this.products = responseData;
  }, error => {
    console.log(error);
  });
  console.log('subscription ended');
}


  ngOnInit() {
  }

}
