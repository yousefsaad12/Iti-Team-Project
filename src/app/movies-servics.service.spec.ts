import { TestBed } from '@angular/core/testing';

import { MoviesServicsService } from './movies-servics.service';

describe('MoviesServicsService', () => {
  let service: MoviesServicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesServicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
