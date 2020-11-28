# InputNumberWithComma

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Description
A simple component with option to add commas to your input from type number

## How to use
1- import NumberWithCommaModule in your app.module : 

import { NumberWithCommaModule } from '@aiham-aburafaa/input-number-with-comma';

imports: [
	NumberWithCommaModule
]


2- Just use it in your html code :

<number-input name="aNumber" [name]="'aNumber'"
[readonly]="false"
[(ngModel)]="model"
></number-input>

3- Enjoy :)
