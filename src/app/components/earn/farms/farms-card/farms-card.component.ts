import { Component, Input, OnInit, Output } from '@angular/core';
import { Farms } from 'src/app/models/Farms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-farms-card',
  templateUrl: './farms-card.component.html',
  styleUrls: ['./farms-card.component.css']
})
export class FarmsCardComponent implements OnInit {

  @Input() cardsData: Farms [] = [];
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
