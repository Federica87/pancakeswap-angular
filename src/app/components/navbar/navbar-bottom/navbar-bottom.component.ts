import { Component, OnInit } from '@angular/core';
import { IEarn } from 'src/app/models/INav';

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.css']
})
export class NavbarBottomComponent implements OnInit {

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

  wins: Array<string> = ['Trading Competitions', 'Prediction (BETA)', 'Lottery'];

  nfts: Array<string> = ['Overview', 'Collections', 'Activity'];

  others: Array<string> = ['Info', 'IFO', 'Voting', 'Leaderboard', 'Blog', 'Docs'];

  constructor() { }

  ngOnInit(): void {
  }

}
