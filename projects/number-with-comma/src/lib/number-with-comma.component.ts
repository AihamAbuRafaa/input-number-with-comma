import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'number-input',
  template: `
                <input [name]="name"   [readonly]="readonly" [(ngModel)]="value"
               *ngIf="focus" (focusout)="focus=false" type="number">
            <div *ngIf="!focus" (click)="focus=true"
              (focusout)="focus=false">{{val ? val.toLocaleString() : 0}}</div>
  `,
  styles: [
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberWithCommaComponent),
      multi: true
    }
  ]
})
export class NumberWithCommaComponent implements OnInit, ControlValueAccessor {
  @Input() name: string;
  @Input() readonly: boolean;

  onChange: any = () => { }
  onTouch: any = () => { }
  val = 0
  focus = false;
  constructor() { }

  ngOnInit() {
  }


  set value(val) {
    this.val = val
    this.onChange(val)
    this.onTouch(val)
  }


  writeValue(value: any) {
    this.value = value
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }
  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

}