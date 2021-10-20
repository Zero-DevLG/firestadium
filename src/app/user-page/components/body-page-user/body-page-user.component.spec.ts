import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPageUserComponent } from './body-page-user.component';

describe('BodyPageUserComponent', () => {
  let component: BodyPageUserComponent;
  let fixture: ComponentFixture<BodyPageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyPageUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
