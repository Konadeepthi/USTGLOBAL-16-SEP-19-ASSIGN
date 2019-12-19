import { TestBed } from '@angular/core/testing';

import { DisplayRequestedService } from './display-requested.service';

describe('DisplayRequestedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayRequestedService = TestBed.get(DisplayRequestedService);
    expect(service).toBeTruthy();
  });
});
