import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelDiceGameComponent } from './level-dice-game.component';

describe('LevelDiceGameComponent', () => {
  let component: LevelDiceGameComponent;
  let fixture: ComponentFixture<LevelDiceGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelDiceGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelDiceGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
