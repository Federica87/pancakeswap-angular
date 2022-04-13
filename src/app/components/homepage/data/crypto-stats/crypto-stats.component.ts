import { Component, OnInit } from '@angular/core';
import { Stats } from 'src/app/models/Stats';

@Component({
  selector: 'app-crypto-stats',
  templateUrl: './crypto-stats.component.html',
  styleUrls: ['./crypto-stats.component.css']
})
export class CryptoStatsComponent implements OnInit {
  header: string[] = ["Farms", "Syrup Pools"];
  perc: number[] = this.getRandomPerc(100, 500);

  farmStats: Stats[] = [
    {
      name: "TEM-BUSD LP",
      data:  this.perc[0],
      info: "APR"
    },
    {
      name: "YEL-BNB LP",
      data: this.perc[1],
      info: "APR"
    },
    {
      name: "GMI-BNB LP",
      data: this.perc[2],
      info: "APR"
    },
    {
      name: "PEX-BNB LP",
      data: this.perc[3],
      info: "APR"
    },
    {
      name: "HOTCROSS-BNB LP",
      data: this.perc[4],
      info: "APR"
    }
  ]

  syrupStats: Stats[] = [
    {
      name: "Stake CAKE - Earn XWG",
      data: this.perc[0],
      info: "APR"
    },
    {
      name: "Stake CAKE - Earn GMI",
      data: this.perc[1],
      info: "APR"
    },
    {
      name: "Stake CAKE - Earn PEX",
      data: this.perc[2],
      info: "APR"
    },
    {
      name: "Stake CAKE - Earn ERA",
      data: this.perc[3],
      info: "APR"
    },
    {
      name: "Stake CAKE - Earn DUET",
      data: this.perc[4],
      info: "APR"
    }
  ]

  constructor() {setInterval( () => this.switchStats(), 10000) }
  
  ngOnInit(): void {
  }

  switchStats(): void {
    [this.header[0], this.header[1]] = [this.header[1], this.header[0]];
    [this.farmStats, this.syrupStats] = [this.syrupStats, this.farmStats];
    if (this.perc[0] > 99 ) {
      this.perc = this.getRandomPerc(67, 69);
      for (let i = 0; i < this.farmStats.length; i++) {
        this.farmStats[i].data = this.perc [i];
      }
    }
    else {
      this.perc = this.getRandomPerc(100, 500);
      for (let i = 0; i < this.farmStats.length; i++) {
        this.farmStats[i].data = this.perc [i];
      }
    }
  }

  getRandomPerc(min: number, max: number): number[] {
    return [
      Math.floor((Math.random() * (max - min) + min)*1000)/1000,
      Math.floor((Math.random() * (max - min) + min)*1000)/1000,
      Math.floor((Math.random() * (max - min) + min)*1000)/1000,
      Math.floor((Math.random() * (max - min) + min)*1000)/1000,
      Math.floor((Math.random() * (max - min) + min)*1000)/1000
    ];
  }

}
