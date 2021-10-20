import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrProfileComponent } from './usr-profile.component';

describe('UsrProfileComponent', () => {
  let component: UsrProfileComponent;
  let fixture: ComponentFixture<UsrProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsrProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
