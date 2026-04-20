import { TestBed } from '@angular/core/testing';

import { SuperheroeService } from './superheroe.service';

describe('SuperheroeService', () => {
  let service: SuperheroeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperheroeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
