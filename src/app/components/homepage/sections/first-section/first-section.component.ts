import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit {

  connectWallet(): void { this.walletService.connect() }

  constructor( private walletService: WalletService) { }

  ngOnInit(): void {
  }

}
