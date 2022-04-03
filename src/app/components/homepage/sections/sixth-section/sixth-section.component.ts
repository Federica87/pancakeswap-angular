import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-section',
  templateUrl: './sixth-section.component.html',
  styleUrls: ['./sixth-section.component.css']
})
export class SixthSectionComponent implements OnInit {
  cake: string[] = [
    "../../../../../assets/images/home/cake/bottom-right.png",
    "../../../../../assets/images/home/cake/top-right.png",
    "../../../../../assets/images/home/cake/coin.png",
    "../../../../../assets/images/home/cake/top-left.png"
  ]

  cakeStats: number [] = [265869181, 413201331];

  constructor() { 
    setInterval(() => this.cakeStats[0] += Math.floor(Math.random() * (100 - 10) + 10), 5000)
    setInterval(() => this.cakeStats[1] += 1, 10000)
  }

  ngOnInit(): void {
  }

}
