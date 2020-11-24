import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumberWithCommaComponent } from './number-with-comma.component';



@NgModule({
  declarations: [NumberWithCommaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NumberWithCommaComponent]
})
export class NumberWithCommaModule { }
