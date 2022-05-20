import { Component, Input, OnInit } from '@angular/core';
import { Pools } from 'src/app/models/Pools';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-pools-history-table',
  templateUrl: './pools-history-table.component.html',
  styleUrls: ['./pools-history-table.component.css']
})
export class PoolsHistoryTableComponent implements OnInit {
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
