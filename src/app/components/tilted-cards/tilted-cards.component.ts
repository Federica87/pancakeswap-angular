import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { mockTiltedCards } from 'src/app/mockup/cardsData';
import { Card } from 'src/app/models/Card';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-tilted-cards',
  templateUrl: './tilted-cards.component.html',
  styleUrls: ['./tilted-cards.component.css']
})
export class TiltedCardsComponent implements OnInit {

  tiltedCards = this.dataService.getCards('tilted');

  numberGenerator(max: number= 19800, min: number= 19999): void {
    this.tiltedCards![1].secondLine = Math.trunc((Math.random() * (max - min) + min))
  }

  constructor( private dataService: DataService ) {}

  ngOnInit(): void {
    setInterval( () => this.numberGenerator(), 4000)
  }

}



