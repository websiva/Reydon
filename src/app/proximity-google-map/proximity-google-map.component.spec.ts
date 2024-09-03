import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximityGoogleMapComponent } from './proximity-google-map.component';

describe('ProximityGoogleMapComponent', () => {
  let component: ProximityGoogleMapComponent;
  let fixture: ComponentFixture<ProximityGoogleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProximityGoogleMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximityGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
