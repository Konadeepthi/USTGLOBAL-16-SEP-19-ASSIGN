import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieparent',
  templateUrl: './movieparent.component.html',
  styleUrls: ['./movieparent.component.css']
})
export class MovieparentComponent implements OnInit {
  selectedMovie;
  movies = [{
    Url : 'http://t1.gstatic.com/images?q=tbn:ANd9GcTzD1TsoOa4Myzi9NtTd7yuxGh2ACZCzEv9kLcBWCffM0OYXmr1',
    name : 'Yajamana',
    rating : 'Rating :8/10',
    desc : 'Yajamana is a 2019 Indian Kannada language action film written and directed by V. Harikrishna and Pon Kumaran and produced by Shylaja Nag and B Suresh. It stars Darshan, Rashmika Mandanna and Tanya Hope in lead roles. It also features an ensemble cast of Thakur Anoop Singh, Devaraj, P. Ravi Shankar, Dhananjay in key supporting roles. The films background score and soundtrack is also composed by V. Harikrishna.'
  }, {
    Url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSA-W3p9yQPfm8BBWHrmzm_h8xr3Sk2yrAWM_tldeeocAl2NhLu',
    name : 'Mr.Airavata',
    rating : 'Rating :7/10',
    desc : 'Mr. Airavata is a 2015 Indian Kannada-language action masala film directed and written by A. P. Arjun and produced by Sandesh Nagaraj.[1] The film stars Darshan, Urvashi Rautela and Prakash Raj in the lead roles and also stars Darshans son Vineesh making his acting debut.[2] The music is composed by V. Harikrishna'
  }, {
    Url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsLS6NX75vPDl0ZMhukweodqjxFXQMUJ6fPb9lpgeYNdK22_e9',
    name : 'Kurukshetra',
    rating : 'Rating :9/10',
    desc : 'Kurukshetra is an Indian Kannada-language epic historical war film, written by J. K. Bharavi and directed by Naganna. It is based on the epic poem Gadhayuddha by Ranna, which itself is based on the Indian epic Mahabharata. The story is centred on Duryodhana, the Kaurava king. The film was produced by Munirathna.'
  }, {
    Url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQepMAiK2k4qPWcHX9sv-HrxGu_K4sxG1Lf7LeQTobjW83ct8S2',
    name : 'Sangolli Rayanna',
    rating : 'Rating :10/10',
    desc : 'Sangolli Rayanna, the army chief of the Kingdom of Kittur and a freedom fighter, revolts against the British in a bid to oust them from the country.'
  }, {
    Url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPSKRf3idbkzuXGQxt-I6tFlBO2CO5vse7S2LK5gN1dYHHx_c6',
    name : 'Navagraha',
    rating : 'Rating :9/10',
    desc : 'aggu, a petty thief, is hired by a don to smuggle the golden howdah from the Mysore Palace. Along with his lover and sisters support, he forms a gang of eight men for his mission.'
  } ];

  constructor() { }

  ngOnInit() {
  }
  send(movie) {
    this.selectedMovie = movie;
  }

}
