import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Farms } from 'src/app/models/Farms';

@Component({
  selector: 'app-farms-table',
  templateUrl: './farms-table.component.html',
  styleUrls: ['./farms-table.component.css']
})
export class FarmsTableComponent implements OnInit {

  @Input() tableData: Farms [] = [];
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
