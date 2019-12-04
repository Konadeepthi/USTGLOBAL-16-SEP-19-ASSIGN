import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chparent',
  templateUrl: './chparent.component.html',
  styleUrls: ['./chparent.component.css']
})
export class ChparentComponent implements OnInit {
select;
news;
  constructor(public http: HttpClient) {
    this.getNews();
   }

  ngOnInit() {
  }
  fun(n){
    this.select =n;
  }

  getNews(){
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=ch&apiKey=b0a4ca5880ab41f3b3194e40dedaec58').subscribe(data=>{
     this.news=data.articles;
      console.log(this.news);
    }, err =>{
      console.log(err);
    },()=>{
      console.log("data got successfully");
    })
  
  }


}
