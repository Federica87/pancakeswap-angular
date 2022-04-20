import { Injectable } from '@angular/core';
import { mockCards, mockTiltedCards } from '../mockup/cardsData';
import { cakeStatsMockup, farmStatsMockup, SyrupStatsMockup } from '../mockup/statsData';
import { Card } from '../models/Card';
import { Stat } from '../models/Stats';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private farmStats: Stat [] = farmStatsMockup;

  private syrupStats: Stat [] = SyrupStatsMockup;

  private cakeStats: Stat [] = cakeStatsMockup;

  private cards: Card [] = mockCards;

  private tiltedCards: Card []= mockTiltedCards;

  getStats(type: string): Stat [] | undefined {
    switch (type) {
      case 'farm':
        return this.farmStats;
      case 'syrup':
        return this.syrupStats;
      case 'cake':
        return this.cakeStats;
      default:
        console.log('bad request');
        return;
    }
  }

  getCards(type: string): Card [] | undefined {
    switch (type) {
      case 'cards':
        return this.cards;
      case 'tilted':
        return this.tiltedCards;
      default:
        console.log('bad request');
        return;
    }
  }

}
