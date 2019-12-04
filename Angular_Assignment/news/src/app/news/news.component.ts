import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
selectedCountry;
selectedCategory;
news;
getnews;
select;
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }
  fun(ne){
    this.select=ne;
  }
  sendData(form){
    this.selectedCountry = form.value.country;
    this.selectedCategory = form.value.categories;
this.getnews = `https://newsapi.org/v2/top-headlines?country=${this.selectedCountry}&category=${this.selectedCategory}&apiKey=b0a4ca5880ab41f3b3194e40dedaec58`;
    console.log(this.selectedCountry);
    console.log(this.selectedCategory);
    console.log(this.getnews);
      this.http.get<any>(this.getnews).subscribe(data=>{
      console.log(data.articles);
      this.news = data.articles;
    },err=>{
      console.log(err);
    },()=>{
      console.log("data get successfully");
    });
  }
}
