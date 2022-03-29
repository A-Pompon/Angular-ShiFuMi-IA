import { TestBed } from '@angular/core/testing';

import { DiceGameService } from './dice-game.service';

describe('DiceGameService', () => {
  let service: DiceGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiceGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
