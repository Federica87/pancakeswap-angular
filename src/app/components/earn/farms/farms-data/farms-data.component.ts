import { Farms } from './../../../../models/Farms';
import { Component, OnInit } from '@angular/core';
import { farmCrypto } from 'src/app/mockup/farmsData';
import { WalletService } from 'src/app/services/wallet.service';
import { SortingService } from 'src/app/services/sorting.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-farms-data',
  templateUrl: './farms-data.component.html',
  styleUrls: ['./farms-data.component.css']
})
export class FarmsDataComponent implements OnInit {

  farms$!: Observable<Farms[]>

  constructor( private walletService: WalletService, private sortingService: SortingService) { }

  ngOnInit(): void {
    this.farms$ = this.sortingService.getFarms();
  }

  connectWallet(): void {
    this.walletService.connect();
  }

}
