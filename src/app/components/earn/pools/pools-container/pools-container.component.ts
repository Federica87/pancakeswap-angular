import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Pools } from 'src/app/models/Pools';
import { PoolsSort } from 'src/app/models/SorterEnums';
import { SortingService } from 'src/app/services/sorting.service';

@Component({
  selector: 'app-pools-container',
  templateUrl: './pools-container.component.html',
  styleUrls: ['./pools-container.component.css']
})
export class PoolsContainerComponent implements OnInit {
  show: string = 'cards';
  sortTypes = Object.values(PoolsSort);

  pools$!: Observable<Pools[]>

  constructor(private title: Title, private sortingService: SortingService) { }

  ngOnInit(): void {
    this.title.setTitle('Pools | PancakeSwap $7,241');
    this.pools$ = this.sortingService.getPools();
  }

}
