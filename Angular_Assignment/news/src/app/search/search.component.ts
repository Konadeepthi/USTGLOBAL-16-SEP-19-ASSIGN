import { Component, OnInit, DoCheck, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, DoCheck,AfterViewChecked{
news;
new;
value;
  constructor(public http: HttpClient, public service: UserserviceService) {
  
   }
   ngAfterViewChecked() {
// this.getNews();
   }
ngDoCheck() {
  this.getNews();
}

  ngOnInit() {
  }
  getNews(){
    this.value=this.service.search;
    console.log(this.value);
    this.new = `https://newsapi.org/v2/top-headlines?q=${this.value}&apiKey=b0a4ca5880ab41f3b3194e40dedaec58`;
    console.log(this.new);
    this.http.get<any>(this.new).subscribe(data=>{
      console.log(data.articles);
      this.news = data.articles;
    },err=>{
      console.log(err);
    },()=>{
      console.log("data get successfully");
    });
  }
}
