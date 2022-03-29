import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestShifumiEndComponent } from './test-shifumi-end.component';

describe('TestShifumiEndComponent', () => {
  let component: TestShifumiEndComponent;
  let fixture: ComponentFixture<TestShifumiEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestShifumiEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShifumiEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
