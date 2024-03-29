import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WalletService } from './services/wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  wallet$!: Observable<boolean>;

  constructor( private walletService: WalletService ) {}

  ngOnInit() {
    this.wallet$ = this.walletService.getStatus();
  }

}
