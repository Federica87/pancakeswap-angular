import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { poolsCrypto } from 'src/app/mockup/poolsData';
import { Pools } from 'src/app/models/Pools';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-pools-card',
  templateUrl: './pools-card.component.html',
  styleUrls: ['./pools-card.component.css']
})
export class PoolsCardComponent implements OnInit {
  pools:Pools[] = poolsCrypto


  connectWallet(): void {
    this.walletService.connect();
  }

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
  }

}
