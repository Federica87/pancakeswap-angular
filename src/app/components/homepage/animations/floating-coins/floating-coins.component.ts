import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-coins',
  templateUrl: './floating-coins.component.html',
  styleUrls: ['./floating-coins.component.css']
})
export class FloatingCoinsComponent implements OnInit {
  @Input() img: string [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
