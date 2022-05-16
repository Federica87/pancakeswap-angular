import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pools-container',
  templateUrl: './pools-container.component.html',
  styleUrls: ['./pools-container.component.css']
})
export class PoolsContainerComponent implements OnInit {
  show: string = 'tabs';

  constructor() { }

  ngOnInit(): void {
  }

}
