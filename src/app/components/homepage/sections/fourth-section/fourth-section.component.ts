import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-section',
  templateUrl: './fourth-section.component.html',
  styleUrls: ['./fourth-section.component.css']
})
export class FourthSectionComponent implements OnInit {
  stats: string[] = [
    "../../../../../assets/images/home/earn/pie.png",
    "../../../../../assets/images/home/earn/stonks.png",
    "../../../../../assets/images/home/earn/folder.png"
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
