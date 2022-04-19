import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { mockTiltedCards } from 'src/app/mockup-data/cardsData';
import { ITiltedCards } from 'src/app/models/ITiltedCards';


@Component({
  selector: 'app-tilted-cards',
  templateUrl: './tilted-cards.component.html',
  styleUrls: ['./tilted-cards.component.css']
})
export class TiltedCardsComponent implements OnInit {


  tiltedCards: ITiltedCards[]= mockTiltedCards;


  numberGenerator(max: number= 19800, min: number= 19999): void {
    this.tiltedCards[1].secondLine = Math.trunc((Math.random() * (max - min) + min))
  }

  constructor() { setInterval( () => this.numberGenerator(), 4000) }
  ngOnInit(): void {
  }

}



