import { TestBed } from '@angular/core/testing';

import { TrophesService } from './trophes.service';

describe('TrophesService', () => {
  let service: TrophesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrophesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
