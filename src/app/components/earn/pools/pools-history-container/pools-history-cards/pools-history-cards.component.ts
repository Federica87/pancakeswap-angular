import { finishedPools } from './../../../../../mockup/poolsData';
import { Pools } from 'src/app/models/Pools';
import { Component, OnInit, Input } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-pools-history-cards',
  templateUrl: './pools-history-cards.component.html',
  styleUrls: ['./pools-history-cards.component.css']
})
export class PoolsHistoryCardsComponent implements OnInit {

  @Input() pools: Pools[] = finishedPools;

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
