import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-single',
  templateUrl: './card-single.component.html',
  styleUrls: ['./card-single.component.css']
})
export class CardSingleComponent implements OnInit {

  cards = this.cardsService.get();

  constructor( private cardsService: CardsService ) {}

  ngOnInit(): void {
  }

}


