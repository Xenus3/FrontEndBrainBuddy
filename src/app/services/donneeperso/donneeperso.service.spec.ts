import { TestBed } from '@angular/core/testing';

import { DonneepersoService } from './donneeperso.service';

describe('DonneepersoService', () => {
  let service: DonneepersoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonneepersoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
