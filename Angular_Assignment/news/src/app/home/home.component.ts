import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
entertain;
news;
headline;
  constructor(public http:HttpClient) { 
    this.getNews();
    this.getNews1();
    this.getNews2();
  }

  ngOnInit() {
  }
  getNews(){
    this.http.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=b0a4ca5880ab41f3b3194e40dedaec58').subscribe(data=>{
      this.headline=data.articles;
    }, err=>{
      console.log(err);
    },()=>{
      console.log("data got successfully");
    });
  }
    getNews1(){
      this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b0a4ca5880ab41f3b3194e40dedaec58').subscribe(data=>{
        this.news=data.articles;
      }, err=>{
        console.log(err);
      },()=>{
        console.log("data got successfully");
      });
    }
      getNews2(){
        this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b0a4ca5880ab41f3b3194e40dedaec58').subscribe(data=>{
          this.entertain=data.articles;
        }, err=>{
          console.log(err);
        },()=>{
          console.log("data got successfully");
        });
      }
  
}
