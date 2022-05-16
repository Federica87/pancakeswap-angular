import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  constructor() { }
  
  ngOnInit(): void {
  }
  
}