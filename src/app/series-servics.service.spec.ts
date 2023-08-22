import { TestBed } from '@angular/core/testing';

import { SeriesServicsService } from './series-servics.service';

describe('SeriesServicsService', () => {
  let service: SeriesServicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesServicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
