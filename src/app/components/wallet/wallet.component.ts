import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  more: boolean = false;

  constructor( private walletService: WalletService ) { }

  ngOnInit(): void {
  }

  exitWallet(): void {
    this.walletService.exit()
  }

  openMore(): void {
    this.more = true;
  }

}
