import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-toi',
  templateUrl: './toi.component.html',
  styleUrls: ['./toi.component.css']
})
export class ToiComponent implements OnInit {
news;
  constructor(public http: HttpClient) {
    this.getNews();
   }

  ngOnInit() {
  }
  getNews(){
    this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=b0a4ca5880ab41f3b3194e40dedaec58').subscribe(data=>{
      console.log(data.articles);
      this.news = data.articles;
    },err=>{
      console.log(err);
    },()=>{
      console.log("data get successfully");
    });
  }

}
