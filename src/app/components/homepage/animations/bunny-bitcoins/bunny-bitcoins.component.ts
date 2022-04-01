import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bunny-bitcoins',
  templateUrl: './bunny-bitcoins.component.html',
  styleUrls: ['./bunny-bitcoins.component.css']
})
export class BunnyBitcoinsComponent implements OnInit {
  @Input() img: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
