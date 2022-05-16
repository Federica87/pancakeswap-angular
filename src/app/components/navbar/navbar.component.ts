import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEarn, ILanguage, INft, IOther, ITrade, IWin } from 'src/app/models/INav';
import { NavDollarService } from 'src/app/services/nav-dollar.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  trades: ITrade[] = [
    {
      trade: "Swap"
    },
    {
      trade: "Limit"
    },
    {
      trade: "Liquidity"
    },
    {
      trade: "Perpetual"
    },
  ]

  earns: IEarn[] = [
    {
      link:"farms",
      earn: "Farms"
    },
    {
      link:"pools",
      earn: "Pools"
    }
  ]

  wins: IWin[] = [
    {
      win: "Trading Competitions"
    },
    {
      win: "Prediction (BETA)"
    },
    {
      win: "Lottery"
    }
  ]

  nfts: INft[] = [
    {
      nft: "Overview"
    },
    {
      nft: "Collections"
    },
    {
      nft: "Activity"
    }
  ]

  others: IOther[] = [
    {
      other: "Info"
    },
    {
      other: "IFO"
    },
    {
      other: "Voting"
    },
    {
      other: "Leaderboard"
    },
    {
      other: "Blog"
    },
    {
      other: "Docs"
    }
  ]

  


  constructor(private navDollarService: NavDollarService, private walletService: WalletService ) { }

  navDollarObs$!: Observable<number>;

  ngOnInit(): void {
   this.navDollarObs$ = this.navDollarService.getNavDollar();
  }

  connectWallet(): void {
    this.walletService.connect();
  }

}
