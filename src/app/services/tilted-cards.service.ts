import { Injectable } from '@angular/core';
import { Card } from '../models/Card';
import { mockTiltedCards } from '../mockup/cardsData';

@Injectable({
  providedIn: 'root'
})
export class TiltedCardsService {

  constructor() { }

  private tiltedCards: Card []= mockTiltedCards;

  get(): Card[] {
    return this.tiltedCards;
  }

}
