import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.css']
})
export class ThirdSectionComponent implements OnInit {
  bunnyBitcoins: string[] = [
    "../../../../../assets/images/home/trade/BNB.png",
    "../../../../../assets/images/home/trade/BTC.png",
    "../../../../../assets/images/home/trade/CAKE.png"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
