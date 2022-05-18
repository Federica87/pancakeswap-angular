import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FarmsSort } from 'src/app/models/SorterEnums';

@Component({
  selector: 'app-farms-container',
  templateUrl: './farms-container.component.html',
  styleUrls: ['./farms-container.component.css']
})
export class FarmsContainerComponent implements OnInit {
  show: string = 'cards';
  staked: boolean = false;
  sortTypes = Object.values(FarmsSort);

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Farms | PancakeSwap $7,241');
  }

}
