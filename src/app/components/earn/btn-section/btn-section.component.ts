import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortingService } from 'src/app/services/sorting.service';

@Component({
  selector: 'app-btn-section',
  templateUrl: './btn-section.component.html',
  styleUrls: ['./btn-section.component.css']
})
export class BtnSectionComponent implements OnInit {
  @Output() show = new EventEmitter<string>();
 
  fill(empty:string) {

    const btnCards:any = document.querySelector('.cards');
    const btnTabs:any = document.querySelector('.tabs');

    if (empty === 'cards') {
      btnCards.style.fill = 'var(--acqua)';
      btnTabs.style.fill = '';
      
    } else if (empty === 'tabs') {
      btnTabs.style.fill = 'var(--acqua)';
      btnCards.style.fill = '';

    }
  }

  sortSelector = new FormControl('Hot');
  searchInput = new FormControl('');

  sort(): void {
    this.sortingService.sort(this.sortSelector.value);
  }

  search(): void {
    this.sortingService.search(this.searchInput.value.toUpperCase());
  }

  constructor( private sortingService: SortingService) { }
  
  ngOnInit(): void {
  }
  
}