import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'number-input',
  template: `
               <input [name]="name"   [readonly]="readonly" [(ngModel)]="value" (focusout)="valueChanged()" type="text">
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
export class NumberWithCommaComponent implements ControlValueAccessor {
  @Input() name: string;
  @Input() readonly: boolean;

  onChange: any = () => { }
  onTouch: any = () => { }
  value = "";
  valueChanged() {  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    let numAfterDigit = this.value.split('.')[1];
    this.value = this.value.split('.')[0];
    this.value = this.value.replace(/\D/g, '');
    this.value = this.addCommas(this.value)
    if (numAfterDigit) {
      numAfterDigit = numAfterDigit.replace(/\D/g, '');
      if (numAfterDigit) {
        this.value = this.value + '.' + numAfterDigit;
      }
    }
    this.onChange(this.value)
    this.onTouch(this.value)
  }
  // this method sets the value programmatically
  writeValue(value: any) {
    this.value = this.addCommas(value)
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn
  }

  addCommas(number) {
    if (isNaN(number)) {
      return number;
    }
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