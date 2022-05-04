import { Farms } from './../../../../models/Farms';
import { Component, OnInit } from '@angular/core';
import { farmCrypto } from 'src/app/mockup/farmsData';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-farms-data',
  templateUrl: './farms-data.component.html',
  styleUrls: ['./farms-data.component.css']
})
export class FarmsDataComponent implements OnInit {

  farms: Farms[] = farmCrypto;

  constructor( private walletService: WalletService) { }

  ngOnInit(): void {
  }

  connectWallet(): void {
    this.walletService.connect();
  }

}
