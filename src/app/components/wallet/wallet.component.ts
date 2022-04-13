import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  @Output() exit = new EventEmitter<void>();
  more: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  exitWallet(): void {
    this.exit.emit();
  }

  openMore(): void {
    this.more = true;
  }

}
