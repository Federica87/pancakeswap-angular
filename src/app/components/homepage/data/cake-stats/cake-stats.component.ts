import { Component, OnInit } from '@angular/core';
import { cakeStatsMockup } from 'src/app/mockup-data/statsData';
import { Stats } from 'src/app/models/Stats';

@Component({
  selector: 'app-cake-stats',
  templateUrl: './cake-stats.component.html',
  styleUrls: ['./cake-stats.component.css']
})
export class CakeStatsComponent implements OnInit {

  cakeStats: Stats [] = cakeStatsMockup

  constructor() {
    setInterval(() => {
      this.cakeStats[0].data -= 1;
      this.cakeStats[1].data += 1;
    },30)
  }

  ngOnInit(): void {
  }

}
