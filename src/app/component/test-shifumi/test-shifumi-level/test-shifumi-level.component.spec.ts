import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestShifumiLevelComponent } from './test-shifumi-level.component';

describe('TestShifumiLevelComponent', () => {
  let component: TestShifumiLevelComponent;
  let fixture: ComponentFixture<TestShifumiLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestShifumiLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShifumiLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
