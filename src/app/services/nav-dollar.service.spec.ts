import { TestBed } from '@angular/core/testing';

import { NavDollarService } from './nav-dollar.service';

describe('NavDollarService', () => {
  let service: NavDollarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavDollarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
