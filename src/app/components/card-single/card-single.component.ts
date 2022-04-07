import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/models/ICard';
@Component({
  selector: 'app-card-single',
  templateUrl: './card-single.component.html',
  styleUrls: ['./card-single.component.css']
})
export class CardSingleComponent implements OnInit {

  cards: ICard[]=
   [
    {
      firstLine:'3.8 Million',
      secondLine: 'users',
      thirdLine: 'in the last 30 days',
      color: 'color1'
    },
    {
      firstLine:'50 Million',
      secondLine: 'trades',
      thirdLine: 'in the last 30 days',
      color: 'color2'
    },
    {
      firstLine:'$12 Billion',
      secondLine: 'staked',
      thirdLine: 'Total Value Locked',
      color: 'color3'
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}


