import { TestBed } from '@angular/core/testing';

import { NumberWithCommaService } from './number-with-comma.service';

describe('NumberWithCommaService', () => {
  let service: NumberWithCommaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberWithCommaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
