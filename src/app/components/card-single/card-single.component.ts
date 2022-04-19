import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/models/ICard';
import { mockCards } from 'src/app/mockup-data/cards-data';
@Component({
  selector: 'app-card-single',
  templateUrl: './card-single.component.html',
  styleUrls: ['./card-single.component.css']
})
export class CardSingleComponent implements OnInit {
 cards: ICard[]=mockCards;


  constructor() { }

  ngOnInit(): void {
  }

}


