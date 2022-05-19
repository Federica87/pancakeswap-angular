import { Component, Input, OnInit } from '@angular/core';
import { poolsCrypto } from 'src/app/mockup/poolsData';
import { Pools } from 'src/app/models/Pools';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-pools-table',
  templateUrl: './pools-table.component.html',
  styleUrls: ['./pools-table.component.css']
})
export class PoolsTableComponent implements OnInit {
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
