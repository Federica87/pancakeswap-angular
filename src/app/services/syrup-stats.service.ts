import { Injectable } from '@angular/core';
import { Stat } from '../models/Stats';
import { SyrupStatsMockup } from '../mockup/statsData';

@Injectable({
  providedIn: 'root'
})
export class SyrupStatsService {

  constructor() { }

  private syrupStats: Stat [] = SyrupStatsMockup;

  get(): Stat[] {
    return this.syrupStats;
  }
  
}
