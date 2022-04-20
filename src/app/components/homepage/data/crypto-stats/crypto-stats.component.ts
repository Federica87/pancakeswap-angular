import { Component, OnInit } from '@angular/core';
import { farmStatsMockup, SyrupStatsMockup } from 'src/app/mockup/statsData';
import { Stat } from 'src/app/models/Stats';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-crypto-stats',
  templateUrl: './crypto-stats.component.html',
  styleUrls: ['./crypto-stats.component.css']
})
export class CryptoStatsComponent implements OnInit {
  headers: string[] = ["Farms", "Syrup Pools"];

  farmStats = this.dataService.getStats('farm');

  syrupStats = this.dataService.getStats('syrup');

  constructor( private dataService: DataService ) {}
  
  ngOnInit(): void {
    setInterval( () => this.switchStats(), 10000) 
    this.farmStats!.map(stat => stat.data = this.getRandomPerc(67, 69));
    this.syrupStats!.map(stat => stat.data = this.getRandomPerc(100, 500));
  }

  switchStats(): void {
    [this.headers[0], this.headers[1]] = [this.headers[1], this.headers[0]];
    [this.farmStats, this.syrupStats] = [this.syrupStats, this.farmStats];
  }

  getRandomPerc(min: number, max: number): number {
    return  Math.floor((Math.random() * (max - min) + min)*1000)/1000;
  }

}
