import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'number-input',
  template: `
                <input [name]="name"   [readonly]="readonly" [(ngModel)]="model" (ngModelChange)="numberChanged()"
               *ngIf="focus" (mouseout)="focus=false" type="number">
            <div *ngIf="!focus" (click)="focus=true"
              (mouseout)="focus=false">{{addCommas(model)}}</div>
  `,
  styles: [
  ]
})
export class NumberWithCommaComponent implements OnInit {
  @Input() name :string;
  @Input() readonly :boolean;
  @Input() model :number;
  @Output() modelChange = new EventEmitter<number>();
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

  numberChanged(){
    this.modelChange.emit(this.model)
  }

}
