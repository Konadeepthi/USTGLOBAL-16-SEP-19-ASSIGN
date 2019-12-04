import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lapparent',
  templateUrl: './lapparent.component.html',
  styleUrls: ['./lapparent.component.css']
})
export class LapparentComponent implements OnInit {
  selectedLaps;
  laps = [{
    Url : 'https://cdn.pixabay.com/photo/2014/09/24/14/29/mac-459196__340.jpg',
    name : 'HP',
    price : 'Rs : 53000',
    desc : 'HP Pavilion x360 With Alexa In-built. Freedom To Do More w/ Power Of Your Voice. Shop Now! Accidental Protection. Protegent Antivirus. Additional Warranty. Theft Insurance. Models: HP Pavilion x360 14, HP Gaming Pavilion - 15, OMEN by HP 15, HP Notebook - 15.'
  }, {
    Url : 'https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974__340.jpg',
    name : 'Asus',
    price : 'Rs : 53000',
    desc : 'ASUS Laptop X407UB. Processor. Intel® Core™ i3 6006U Processor, 2 GHz (3 M Cache) Operating System. Windows 10 Pro - ASUS recommends Windows 10 Pro. Memory. DDR4 2400MHz SDRAM, 1 x SO-DIMM socket , up to 8 GB SDRAM. Display. 14.0" (16:9) LED-backlit HD (1366x768) 60Hz Anti-Glare Panel with 45% NTSC. Graphic Storage.'
  }, {
    Url : 'https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336377__340.jpg',
    name : 'Apple Macbook air',
    price : 'Rs : 59999',
    desc : '2.4GHz 8-core Intel Core i9, Turbo Boost up to 5.0GHz, with 16MB shared L3 cache. 32GB of 2400MHz DDR4 memory. Radeon Pro 560X with 4GB of GDDR5 memory. 2.4GHz 8-core Intel Core i9, Turbo Boost up to 5.0GHz, with 16MB shared L3 cache. 32GB of 2400MHz DDR4 memory. Radeon Pro 560X with 4GB of GDDR5 memory.'
  }, {
    Url : 'https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg',
    name : 'Toshiba',
    price :'Rs : 45666',
    desc : 'This item 2015 Toshiba Satellite 15.6-inch Laptop- 5th Gen Intel Core i7-5500U Processor 3.0GHz, 4MB Cache, 8GB Memory, 1TB HDD, HDMI, Bluetooth, Webcam, WIFI, AMD R7 M260, Windows 8.1/Windows 10.'
  }, {
    Url : 'https://cdn.pixabay.com/photo/2015/05/11/14/41/laptop-762548__340.jpg',
    name : 'Acer',
    price : 'Rs : 24999',
    desc : 'Comes W/ Infinity Edge IPS Display. Laptops W/ Intel® Core™ Processor, Buy Now! Cash off on MS Office. Get 3Yr Hardware Warranty. Get 3Yr Premium Support. Amenities: Dell Pro Backpack, Dell Bluetooth Mouse, Dell Professional Headset, Accidental Damage Service.'
  } ];

  constructor() { }

  ngOnInit() {
  }
  send(lap) {
    this.selectedLaps = lap;
  }
}
