import { TestBed } from '@angular/core/testing';

import { TestShifumiService } from './test-shifumi.service';

describe('TestShifumiService', () => {
  let service: TestShifumiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestShifumiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
