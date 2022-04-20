import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { mockCards } from 'src/app/mockup/cardsData';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-card-single',
  templateUrl: './card-single.component.html',
  styleUrls: ['./card-single.component.css']
})
export class CardSingleComponent implements OnInit {

  cards = this.dataService.getCards('cards');

  constructor( private dataService: DataService ) {}

  ngOnInit(): void {
  }

}


