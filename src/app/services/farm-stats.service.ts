import { Injectable } from '@angular/core';
import { Stat } from '../models/Stats';
import { farmStatsMockup } from '../mockup/statsData';

@Injectable({
  providedIn: 'root'
})
export class FarmStatsService {

  constructor() { }

  private farmStats: Stat [] = farmStatsMockup;

  get(): Stat[] {
    return this.farmStats;
  }
  
}
