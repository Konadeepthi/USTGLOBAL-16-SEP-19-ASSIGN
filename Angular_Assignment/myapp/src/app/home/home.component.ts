import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector : 'app-home',
    templateUrl : 'home.component.html',
    styleUrls : ['home.component.css']
})


export class HomeComponent implements OnInit {
  news;
    isActive = false;
constructor(public http:HttpClient) { 
  this.getNews();
}
getNews(){
  this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=b0a4ca5880ab41f3b3194e40dedaec58').subscribe(data=>{
   this.news=data.articles;
    console.log(this.news);
  }, err =>{
    console.log(err);
  },()=>{
    console.log("data got successfully");
  })

}

ngOnInit() {
    
}
}
