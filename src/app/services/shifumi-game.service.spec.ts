import { TestBed } from '@angular/core/testing';

import { ShifumiGameService } from './shifumi-game.service';

describe('ShifumiGameService', () => {
  let service: ShifumiGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShifumiGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
