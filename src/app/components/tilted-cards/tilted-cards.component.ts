import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ITiltedCards } from 'src/app/models/ITiltedCards';





@Component({
  selector: 'app-tilted-cards',
  templateUrl: './tilted-cards.component.html',
  styleUrls: ['./tilted-cards.component.css']
})
export class TiltedCardsComponent implements OnInit {


  random:number= 19832;

  tiltedCards: ITiltedCards[]=
  [
   {
     id:1,
     firstLine:'Prediction',
     secondLine: '750 million',
     thirdLine: 'in BNB won so far',
     fourthLine:'Will BNB price rise or fall? guess correctly to win!',
     buttonLine:'Play'
   },
   {
    id:2,
    firstLine:'Lottery',
    secondLine: this.random,
    thirdLine: 'in CAKE prizes this round',
    fourthLine:'Buy tickets with CAKE, win CAKE if your numbers match',
    buttonLine:'Buy tickets'
   }
 ]
numberGenerator(max: number= 19800, min: number= 19999): void {
     this.tiltedCards[1].secondLine = Math.trunc((Math.random() * (max - min) + min))
}

  constructor() { setInterval( () => this.numberGenerator(), 4000) }
  ngOnInit(): void {
  }

}



