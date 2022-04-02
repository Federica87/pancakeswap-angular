import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crypto-stats',
  templateUrl: './crypto-stats.component.html',
  styleUrls: ['./crypto-stats.component.css']
})
export class CryptoStatsComponent implements OnInit {
  header: string[] = ["Farms", "Syrup Pools"];
  statName: string[] = ["TEM-BUSD LP", "YEL-BNB LP", "GMI-BNB LP", "PEX-BNB LP", "HOTCROSS-BNB LP"]
  statName2: string[] = ["Stake CAKE - Earn XWG", "Stake CAKE - Earn GMI", "Stake CAKE - Earn PEX", "Stake CAKE - Earn ERA", "Stake CAKE - Earn DUET"]
  perc: number[] = this.getRandomPerc(100, 500);
  

  constructor() {setInterval( () => this.switchStats(), 4000) }
  ngOnInit(): void {
  }

  switchStats(): void {
    [this.header[0], this.header[1]] = [this.header[1], this.header[0]];
    [this.statName, this.statName2] = [this.statName2, this.statName];
    if (this.perc[0] > 99 ) {
      this.perc = this.getRandomPerc(67, 69);
    }
    else {
      this.perc = this.getRandomPerc(100, 500);
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
