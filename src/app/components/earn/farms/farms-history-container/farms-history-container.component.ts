import { Title } from '@angular/platform-browser';
import { FarmsSort } from 'src/app/models/SorterEnums';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farms-history-container',
  templateUrl: './farms-history-container.component.html',
  styleUrls: ['./farms-history-container.component.css']
})
export class FarmsHistoryContainerComponent implements OnInit {

  show: string = 'cards';
  staked: boolean = false;
  sortTypes = Object.values(FarmsSort);

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('PancakeSwap $7,241');
  }

}
