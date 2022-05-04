import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Stat } from 'src/app/models/Stats';
import { CakeStatsService } from 'src/app/services/cake-stats.service';

@Component({
  selector: 'app-cake-stats',
  templateUrl: './cake-stats.component.html',
  styleUrls: ['./cake-stats.component.css']
})
export class CakeStatsComponent implements OnInit, OnDestroy {

  cakeStats!: Stat [];
  cakeStats$!: Subscription;

  constructor( private cakeStatsService: CakeStatsService ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.cakeStats![0].data -= 1;
      this.cakeStats![1].data += 1;
    },30)
    
    this.cakeStats$ = this.cakeStatsService.get().subscribe(data => this.cakeStats = data)
  }

  ngOnDestroy(): void {
    this.cakeStats$.unsubscribe();
  }

}
