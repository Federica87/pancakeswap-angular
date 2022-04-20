import { Component, OnInit } from '@angular/core';
import { IEarn, ILanguage, INft, IOther, ITrade, IWin } from 'src/app/models/INav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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

  languages: ILanguage[]=[
    {
      linguage:"العربي"
    },
    {
      linguage: "বাংলা"
    },
    {
      linguage: "English"
    },
    {
      linguage: "Deutsch"
    },
    {
      linguage: "Ελληνικά"
    },
    {
      linguage:"Español"
    },
    {
      linguage:"Suomalainen"
    },
    {
      linguage:"Filipino"
    },
    {
      linguage:"Français"
    },
    {
      linguage:"हिंदी"
    },
    {
      linguage:"Magyar"
    },
    {
      linguage:"Bahasa Indonesia"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
