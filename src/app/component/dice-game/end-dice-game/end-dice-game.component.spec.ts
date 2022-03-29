import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndDiceGameComponent } from './end-dice-game.component';

describe('EndDiceGameComponent', () => {
  let component: EndDiceGameComponent;
  let fixture: ComponentFixture<EndDiceGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndDiceGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndDiceGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
