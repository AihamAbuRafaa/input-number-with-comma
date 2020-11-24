import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'number-input',
  template: `
                <input [name]="name"  [readonly]="readonly" [(ngModel)]="model"
               *ngIf="focus" (mouseout)="focus=false" type="number">
            <div *ngIf="!focus" (click)="focus=false"
              (mouseout)="focus=false">{{addCommas(model)}}</div>
  `,
  styles: [
  ]
})
export class NumberWithCommaComponent implements OnInit {
  @Input() name :string;
  @Input() readonly :boolean;
  model
  focus=false;
  constructor() { }

  ngOnInit(): void {
  }

  addCommas(number) {
    if (number) {
      var parts = number.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    else {
      return 0;
    }
  }

}
