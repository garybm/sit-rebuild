import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  dateMessage: string;

  constructor() {
    setInterval (()=> {
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' , ' + currentDate.toLocaleTimeString();
    } , 1000);
  }

  ngOnInit() {
  }
}
