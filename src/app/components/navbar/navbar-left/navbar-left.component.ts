import { Component, OnInit } from '@angular/core';
import { IEarn, INft, IOther, ITrade, IWin } from 'src/app/models/INav';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css']
})
export class NavbarLeftComponent implements OnInit {

  trades: ITrade[] = [
    {
      trade: "Exchange"
    },
    {
      trade: "Liquidity"
    },
  ]

  earns: IEarn[] = [
    {
      earn: "Farms"
    },
    {
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

  constructor() { }

  ngOnInit(): void {
  }

}
