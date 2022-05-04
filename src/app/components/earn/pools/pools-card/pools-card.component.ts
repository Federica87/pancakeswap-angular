import { Component, OnInit } from '@angular/core';
import { poolsCrypto } from 'src/app/mockup/poolsData';
import { Pools } from 'src/app/models/Pools';

@Component({
  selector: 'app-pools-card',
  templateUrl: './pools-card.component.html',
  styleUrls: ['./pools-card.component.css']
})
export class PoolsCardComponent implements OnInit {
  pools:Pools[] = poolsCrypto
  constructor() { }

  ngOnInit(): void {
  }

}
