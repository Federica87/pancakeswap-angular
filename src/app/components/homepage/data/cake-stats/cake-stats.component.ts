import { Component, OnInit } from '@angular/core';
import { cakeStatsMockup } from 'src/app/mockup/statsData';
import { Stat } from 'src/app/models/Stats';
import { CakeStatsService } from 'src/app/services/cake-stats.service';

@Component({
  selector: 'app-cake-stats',
  templateUrl: './cake-stats.component.html',
  styleUrls: ['./cake-stats.component.css']
})
export class CakeStatsComponent implements OnInit {

  cakeStats = this.cakeStatsService.get();

  constructor( private cakeStatsService: CakeStatsService ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.cakeStats![0].data -= 1;
      this.cakeStats![1].data += 1;
    },30)
  }

}
