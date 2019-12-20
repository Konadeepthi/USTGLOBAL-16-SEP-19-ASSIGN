import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private http: HttpClient,private add: ProductService,private router: Router) { }
  addProduct(addProductForm: NgForm) {
    this.http.post(`${this.add.baseURL}/add`, addProductForm.value).subscribe(response => {
    if (response != null) {
      alert('Book Added');
      this.router.navigate(['/display-book']);
    } else {
      alert('Failed to add book');
    }
    });
  }

  ngOnInit() {
  }

}
