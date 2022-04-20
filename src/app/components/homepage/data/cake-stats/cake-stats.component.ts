import { Component, OnInit } from '@angular/core';
import { cakeStatsMockup } from 'src/app/mockup/statsData';
import { Stat } from 'src/app/models/Stats';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cake-stats',
  templateUrl: './cake-stats.component.html',
  styleUrls: ['./cake-stats.component.css']
})
export class CakeStatsComponent implements OnInit {

  cakeStats = this.dataService.getStats('cake');

  constructor( private dataService: DataService ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.cakeStats![0].data -= 1;
      this.cakeStats![1].data += 1;
    },30)
  }

}
