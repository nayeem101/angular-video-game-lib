import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  gameRating: number = 0;

  constructor() {}

  ngOnInit(): void {}

  getColor(value: number): string {
    if (value > 75) {
      return 'green';
    } else if (value > 50) {
      return 'orange';
    } else if (value > 30) {
      return 'yellow';
    }
    return 'red';
  }
}
