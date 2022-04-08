import { Component, OnInit } from '@angular/core';
import { earn, nft, other, trade, win } from 'src/app/models/INav';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css']
})
export class NavbarLeftComponent implements OnInit {

  trades: trade[] = [
    {
      trade: "Exchange"
    },
    {
      trade: "Liquidity"
    },
  ]

  earns: earn[] = [
    {
      earn: "Farms"
    },
    {
      earn: "Pools"
    }
  ]

  wins: win[] = [
    {
      win: "TRading Competitions"
    },
    {
      win: "Prediction (BETA)"
    },
    {
      win: "Lottery"
    }
  ]

  nfts: nft[] = [
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

  others: other[] = [
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
