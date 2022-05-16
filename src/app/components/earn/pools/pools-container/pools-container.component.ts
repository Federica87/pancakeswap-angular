import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pools-container',
  templateUrl: './pools-container.component.html',
  styleUrls: ['./pools-container.component.css']
})
export class PoolsContainerComponent implements OnInit {
  show = 'tabs';

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Pools | PancakeSwap $7,241');
  }

}
