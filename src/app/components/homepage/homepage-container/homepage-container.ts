import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-homepage-component',
  templateUrl: './homepage-container.html',
  styleUrls: ['./homepage-container.css']
})
export class HomepageContainerComponent implements OnInit, OnDestroy {
  wallet: boolean = false;
  subscription!: Subscription;

  constructor( private walletService: WalletService ) {}

  ngOnInit() {
    this.subscription= this.walletService.getStatus().subscribe(data => this.wallet = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
