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
      trade: "Exchange"
    },
    {
      trade: "Liquidity"
    },
  ]

  earns: IEarn[] = [
    {
      link:"/earn/farms",
      earn: "Farms"
    },
    {
      link:"earn/pools",
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
    },
    {
      linguage:"Italiano"
    },
    {
      linguage:"日本語"
    },
    {
      linguage:"한국어"
    },
    {
      linguage:"Nederlands"
    },
    {
      linguage:"Polski"
    },
    {
      linguage:"Português(Brazil)"
    },
    {
      linguage:"Português"
    },
    {
      linguage:"Română"
    },
    {
      linguage:"Русский"
    },
    {
      linguage:"Svenska"
    },
    {
      linguage:"தமிழ்"
    },
    {
      linguage:"Türkçe"
    },
    {
      linguage:"Українська"
    },
    {
      linguage:"Tiếng Việt"
    },
    {
      linguage:"简体中文"
    },
     
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
