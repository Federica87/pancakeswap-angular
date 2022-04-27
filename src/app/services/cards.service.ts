import { Injectable } from '@angular/core';
import { Card } from '../models/Card';
import { mockCards } from '../mockup/cardsData';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  private cards: Card [] = mockCards;

  get(): Card[] {
    return this.cards;
  }

}
