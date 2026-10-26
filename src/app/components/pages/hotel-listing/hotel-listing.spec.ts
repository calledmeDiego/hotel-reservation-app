import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListing } from './hotel-listing';

describe('HotelListing', () => {
  let component: HotelListing;
  let fixture: ComponentFixture<HotelListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
