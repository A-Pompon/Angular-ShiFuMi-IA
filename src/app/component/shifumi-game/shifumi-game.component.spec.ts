import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShifumiGameComponent } from './shifumi-game.component';

describe('ShifumiGameComponent', () => {
  let component: ShifumiGameComponent;
  let fixture: ComponentFixture<ShifumiGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShifumiGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShifumiGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
