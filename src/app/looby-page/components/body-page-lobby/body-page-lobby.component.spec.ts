import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPageLobbyComponent } from './body-page-lobby.component';

describe('BodyPageLobbyComponent', () => {
  let component: BodyPageLobbyComponent;
  let fixture: ComponentFixture<BodyPageLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyPageLobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPageLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
