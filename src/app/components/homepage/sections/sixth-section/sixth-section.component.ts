import { Component, OnInit } from '@angular/core';
import { Stat } from 'src/app/models/Stats';

@Component({
  selector: 'app-sixth-section',
  templateUrl: './sixth-section.component.html',
  styleUrls: ['./sixth-section.component.css']
})
export class SixthSectionComponent implements OnInit {
  cake: string[] = [
    "../../../../../assets/images/home/cake/bottom-right.png",
    "../../../../../assets/images/home/cake/top-right.png",
    "../../../../../assets/images/home/cake/coin.png",
    "../../../../../assets/images/home/cake/top-left.png"
  ]
  
  constructor() {}

  ngOnInit(): void {
  }

}
