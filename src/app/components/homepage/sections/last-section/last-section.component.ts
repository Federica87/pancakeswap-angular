import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-last-section',
  templateUrl: './last-section.component.html',
  styleUrls: ['./last-section.component.css']
})
export class LastSectionComponent implements OnInit {
  topLeftCoins: string [] = [
    "../../../../../assets/images/home/start/1-bottom.png",
    "../../../../../assets/images/home/start/1-left.png",
    "../../../../../assets/images/home/start/1-top.png"
  ]

  bottomRightCoins: string [] = [
    "../../../../../assets/images/home/start/2-bottom.png",
    "../../../../../assets/images/home/start/2-top.png",
    "../../../../../assets/images/home/start/2-right.png"
  ]

  connectWallet(): void {
    this.walletService.connect();
  }
  
  constructor( private walletService: WalletService ) { }

  ngOnInit(): void {
  }

}
