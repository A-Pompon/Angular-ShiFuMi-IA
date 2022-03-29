import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShifumiGameLevelComponent } from './shifumi-game-level.component';

describe('ShifumiGameLevelComponent', () => {
  let component: ShifumiGameLevelComponent;
  let fixture: ComponentFixture<ShifumiGameLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShifumiGameLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShifumiGameLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
