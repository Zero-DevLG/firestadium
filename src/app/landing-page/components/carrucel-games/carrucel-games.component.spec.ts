import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrucelGamesComponent } from './carrucel-games.component';

describe('CarrucelGamesComponent', () => {
  let component: CarrucelGamesComponent;
  let fixture: ComponentFixture<CarrucelGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrucelGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrucelGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
