import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberWithCommaComponent } from './number-with-comma.component';

describe('NumberWithCommaComponent', () => {
  let component: NumberWithCommaComponent;
  let fixture: ComponentFixture<NumberWithCommaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberWithCommaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberWithCommaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
