import { Observable } from 'rxjs';
import { Pools } from 'src/app/models/Pools';
import { PoolsSort } from './../../../../models/SorterEnums';
import { SortingService } from 'src/app/services/sorting.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pools-history-container',
  templateUrl: './pools-history-container.component.html',
  styleUrls: ['./pools-history-container.component.css']
})
export class PoolsHistoryContainerComponent implements OnInit {
  show: string = 'cards';
  staked:boolean = false;
  sortTypes = Object.values(PoolsSort);

  pools$!: Observable<Pools[]>

  constructor(private title: Title, private sortingService: SortingService) { }

  ngOnInit(): void {
    this.title.setTitle('PancakeSwap $7,241');
    this.pools$ = this.sortingService.getPools();
  }

}
