import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farms-card',
  templateUrl: './farms-card.component.html',
  styleUrls: ['./farms-card.component.css']
})
export class FarmsCardComponent implements OnInit {

  details: string[] = ['Details', 'Hide']

  openDetails(): void {
    [this.details[0], this.details[1]] = [this.details[1], this.details[0]];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
