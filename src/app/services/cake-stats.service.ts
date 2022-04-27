import { Injectable } from '@angular/core';
import { Stat } from '../models/Stats';
import { cakeStatsMockup } from '../mockup/statsData';

@Injectable({
  providedIn: 'root'
})
export class CakeStatsService {

  constructor() { }

  private cakeStats: Stat [] = cakeStatsMockup;

  get(): Stat[] {
    return this.cakeStats;
  }
  
}
