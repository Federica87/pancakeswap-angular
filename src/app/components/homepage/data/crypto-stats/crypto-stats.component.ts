import { Component, OnInit } from '@angular/core';
import { farmStatsMockup, SyrupStatsMockup } from 'src/app/mockup-data/statsData';
import { Stats } from 'src/app/models/Stats';

@Component({
  selector: 'app-crypto-stats',
  templateUrl: './crypto-stats.component.html',
  styleUrls: ['./crypto-stats.component.css']
})
export class CryptoStatsComponent implements OnInit {
  headers: string[] = ["Farms", "Syrup Pools"];
  // 67,69 e 100,500

  farmStats: Stats[] = farmStatsMockup;

  syrupStats: Stats[] = SyrupStatsMockup;

  constructor() {setInterval( () => this.switchStats(), 10000) }
  
  ngOnInit(): void {
    this.farmStats.map(stat => stat.data = this.getRandomPerc(67, 69));
    this.syrupStats.map(stat => stat.data = this.getRandomPerc(100, 500));
  }

  switchStats(): void {
    [this.headers[0], this.headers[1]] = [this.headers[1], this.headers[0]];
    [this.farmStats, this.syrupStats] = [this.syrupStats, this.farmStats];
  }

  getRandomPerc(min: number, max: number): number {
    return  Math.floor((Math.random() * (max - min) + min)*1000)/1000;
  }

}
