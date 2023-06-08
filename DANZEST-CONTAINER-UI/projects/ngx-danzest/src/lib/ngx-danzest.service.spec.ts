import { TestBed } from '@angular/core/testing';

import { NgxDanzestService } from './ngx-danzest.service';

describe('NgxDanzestService', () => {
  let service: NgxDanzestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDanzestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
