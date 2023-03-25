import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPreferencesComponent } from './hotel-preferences.component';

describe('HotelPreferencesComponent', () => {
  let component: HotelPreferencesComponent;
  let fixture: ComponentFixture<HotelPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelPreferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
