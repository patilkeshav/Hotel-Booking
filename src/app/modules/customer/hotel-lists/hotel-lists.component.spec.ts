import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListsComponent } from './hotel-lists.component';

describe('HotelListsComponent', () => {
  let component: HotelListsComponent;
  let fixture: ComponentFixture<HotelListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
