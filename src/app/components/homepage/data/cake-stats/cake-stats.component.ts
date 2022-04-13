import { Component, OnInit } from '@angular/core';
import { Stats } from 'src/app/models/Stats';

@Component({
  selector: 'app-cake-stats',
  templateUrl: './cake-stats.component.html',
  styleUrls: ['./cake-stats.component.css']
})
export class CakeStatsComponent implements OnInit {

  cakeStats: Stats [] = [
    {
      name: "Total supply",
      data: 265869181
    },
    {
      name: "Burned to date",
      data: 413201331
    },
    {
      name: "Market cap",
      data: 2.4
    },
    {
      name: "Current emissions",
      data: 14.25
    }
  ]

  cakeStats2: number [] = [265869181, 413201331];

  constructor() { 
    setInterval(() => this.cakeStats2[0] += Math.floor(Math.random() * (100 - 10) + 10), 5000)
    setInterval(() => this.cakeStats2[1] += 1, 10000)
  }

  ngOnInit(): void {
  }

}
