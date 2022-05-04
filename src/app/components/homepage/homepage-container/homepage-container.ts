import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-homepage-component',
  templateUrl: './homepage-container.html',
  styleUrls: ['./homepage-container.css']
})
export class HomepageContainerComponent implements OnInit {

  constructor() {}

  ngOnInit() { }

}
