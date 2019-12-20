import { TestBed } from '@angular/core/testing';

import { DisplayProductsService } from './display-products.service';

describe('DisplayProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayProductsService = TestBed.get(DisplayProductsService);
    expect(service).toBeTruthy();
  });
});
