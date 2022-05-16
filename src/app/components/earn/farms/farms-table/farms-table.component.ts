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

  constructor() { }

  ngOnInit(): void {
    console.log(this.tableData);
  }

  connectWallet(): void {
    this.connected.emit();
  }

}
