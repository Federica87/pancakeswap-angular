import { finishedFarms } from './../../../../../mockup/farmsData';
import { Farms } from 'src/app/models/Farms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-farms-history-cards',
  templateUrl: './farms-history-cards.component.html',
  styleUrls: ['./farms-history-cards.component.css']
})
export class FarmsHistoryCardsComponent implements OnInit {

  @Input() cardsData: Farms[] = finishedFarms;
  @Output() connected = new EventEmitter<void>();

  details: boolean[] = Array.from({length: this.cardsData.length}).map(x => x = false);

  openDetails(index: number): void {
    if (this.details[index] === true) {
      this.details[index] = false;
    }
    else {
      this.details[index] = true;
    }
  }

  connectWallet(): void {
    this.connected.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
