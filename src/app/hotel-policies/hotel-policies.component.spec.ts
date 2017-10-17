import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPoliciesComponent } from './hotel-policies.component';

describe('HotelPoliciesComponent', () => {
  let component: HotelPoliciesComponent;
  let fixture: ComponentFixture<HotelPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
