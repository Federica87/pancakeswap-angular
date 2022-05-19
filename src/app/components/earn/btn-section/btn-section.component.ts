import { Component, EventEmitter, Input, NgIterable, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pools } from 'src/app/models/Pools';
import { FarmsSort, PoolsSort } from 'src/app/models/SorterEnums';
import { SortingService } from 'src/app/services/sorting.service';

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

  constructor( private sortingService: SortingService) { }
  
  ngOnInit(): void {
    if (this.sortTypes.includes('Multiplier')) {
      this.componentName = 'farms'
    }
    else {
      this.componentName = 'pools'
    }
  }
  
}