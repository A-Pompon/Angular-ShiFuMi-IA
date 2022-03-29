import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestShifumiComponent } from './test-shifumi.component';

describe('TestShifumiComponent', () => {
  let component: TestShifumiComponent;
  let fixture: ComponentFixture<TestShifumiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestShifumiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShifumiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
