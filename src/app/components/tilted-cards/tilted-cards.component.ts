import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { mockTiltedCards } from 'src/app/mockup/cardsData';
import { Card } from 'src/app/models/Card';
import { TiltedCardsService } from 'src/app/services/tilted-cards.service';


@Component({
  selector: 'app-tilted-cards',
  templateUrl: './tilted-cards.component.html',
  styleUrls: ['./tilted-cards.component.css']
})
export class TiltedCardsComponent implements OnInit {

  tiltedCards = this.tiltedCardService.get();

  numberGenerator(max: number= 19800, min: number= 19999): void {
    this.tiltedCards![1].secondLine = Math.trunc((Math.random() * (max - min) + min))
  }

  constructor( private tiltedCardService: TiltedCardsService ) {}

  ngOnInit(): void {
    setInterval( () => this.numberGenerator(), 4000)
  }

}



