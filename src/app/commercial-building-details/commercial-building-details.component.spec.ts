import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialBuildingDetailsComponent } from './commercial-building-details.component';

describe('CommercialBuildingDetailsComponent', () => {
  let component: CommercialBuildingDetailsComponent;
  let fixture: ComponentFixture<CommercialBuildingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommercialBuildingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialBuildingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
