import { Component, EventEmitter, Input, NgIterable, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pools } from 'src/app/models/Pools';
import { FarmsSort, PoolsSort } from 'src/app/models/SorterEnums';
import { SortingService } from 'src/app/services/sorting.service';
import { FarmsContainerComponent } from '../farms/farms-container/farms-container.component';
import { FarmsHistoryContainerComponent } from '../farms/farms-history-container/farms-history-container.component';
import { PoolsContainerComponent } from '../pools/pools-container/pools-container.component';
import { PoolsHistoryContainerComponent } from '../pools/pools-history-container/pools-history-container.component';

@Component({
  selector: 'app-btn-section',
  templateUrl: './btn-section.component.html',
  styleUrls: ['./btn-section.component.css']
})
export class BtnSectionComponent implements OnInit {
  @Output() show = new EventEmitter<string>();
  @Output() stakedEvent = new EventEmitter<boolean>();
  @Input() sortTypes!: string[]

  componentName!: string;

  staked: boolean = false;
  filled: boolean = false;
 
  fill(element: string): void {
    if (element === 'cards') {
      this.filled = false;
    }
    else if (element === 'tabs') {
      this.filled = true;
    }
  }

  changeStaked() {
      if (this.staked === false) {
        this.staked = true;
      }
      else if (this.staked === true) {
        this.staked = false;
      }
    this.stakedEvent.emit(this.staked);
  }

  sortSelector = new FormControl('Hot');
  searchInput = new FormControl('');

  sort(): void {
    this.sortingService.sort(this.sortSelector.value, this.componentName);
  }

  search(): void {
    this.sortingService.search(this.searchInput.value.toUpperCase(), this.componentName);
  }

  constructor( private sortingService: SortingService, private router: Router, private route: ActivatedRoute ) { }

  backActive!: boolean;
  historyActive!: boolean;

  navigateToHistory(): void {
    if (this.route.component === FarmsContainerComponent || this.route.component === PoolsContainerComponent ) {
      this.router.navigate(['history'], {relativeTo: this.route})
    }
  }

  navigateBack(): void {
    if (this.route.component === FarmsHistoryContainerComponent || this.route.component === PoolsHistoryContainerComponent ) {
      this.router.navigate(['..'], {relativeTo: this.route})
    }
  }
  
  ngOnInit(): void {
    if (this.sortTypes.includes('Multiplier')) {
      this.componentName = 'farms'
    }
    else {
      this.componentName = 'pools'
    }
    if (this.route.component === FarmsContainerComponent || this.route.component === PoolsContainerComponent ) {
      this.backActive = true;
      this.historyActive = false;
    }
    if (this.route.component === FarmsHistoryContainerComponent || this.route.component === PoolsHistoryContainerComponent ) {
      this.backActive = false;
      this.historyActive = true;
    }
  }


  
}