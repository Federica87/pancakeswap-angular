import { SortingService } from 'src/app/services/sorting.service';
import { WalletService } from './../../../../../services/wallet.service';
import { Observable } from 'rxjs';
import { Farms } from 'src/app/models/Farms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-farms-history-data',
  templateUrl: './farms-history-data.component.html',
  styleUrls: ['./farms-history-data.component.css']
})
export class FarmsHistoryDataComponent implements OnInit {
  @Input() show: string = 'tabs';

  farms$!: Observable<Farms[]>

  constructor(private walletService: WalletService, private sortingService: SortingService) { }

  ngOnInit(): void {
    this.farms$ = this.sortingService.getFarms();
  }

  connectWallet(): void {
    this.walletService.connect();
  }

}
