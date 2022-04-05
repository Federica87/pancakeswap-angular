import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit {
  wallet: boolean = false;
  connectWallet(): void {
    if (this.wallet === false) {
    this.wallet = true;
    }
    else {
      this.wallet = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
