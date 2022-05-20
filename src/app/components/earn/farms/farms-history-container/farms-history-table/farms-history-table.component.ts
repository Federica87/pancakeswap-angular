import { Farms } from './../../../../../models/Farms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { finishedFarms } from 'src/app/mockup/farmsData';

@Component({
  selector: 'app-farms-history-table',
  templateUrl: './farms-history-table.component.html',
  styleUrls: ['./farms-history-table.component.css']
})
export class FarmsHistoryTableComponent implements OnInit {
  @Input() tableData: Farms [] = finishedFarms;
  @Output() connected = new EventEmitter<void>();

  details: boolean[] = Array.from({length: this.tableData.length}).map(x => x = false);

  openDetails(index: number): void {
    if (this.details[index] === true) {
      this.details[index] = false;
    }
    else {
      this.details[index] = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  connectWallet(): void {
    this.connected.emit();
  }

}
