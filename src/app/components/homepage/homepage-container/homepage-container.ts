import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-homepage-component',
  templateUrl: './homepage-container.html',
  styleUrls: ['./homepage-container.css']
})
export class HomepageContainerComponent implements OnInit {
  wallet: boolean = false;

  constructor( private walletService: WalletService ) {}

  ngOnInit() {
    this.walletService.getStatus().subscribe(data => this.wallet = data)
  }

}
