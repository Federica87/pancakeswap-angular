import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { poolsCrypto } from 'src/app/mockup/poolsData';
import { Pools } from 'src/app/models/Pools';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-pools-card',
  templateUrl: './pools-card.component.html',
  styleUrls: ['./pools-card.component.css']
})
export class PoolsCardComponent implements OnInit {
  @Input() pools: Pools[] = [];

  details: boolean[] = Array.from({length: this.pools.length}).map(x => x = false);

  openDetails(index: number): void {
    if (this.details[index] === true) {
      this.details[index] = false;
    }
    else {
      this.details[index] = true;
    }
    console.log(index)
  }

  connectWallet(): void {
    this.walletService.connect();
  }

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
  }

}
