import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximityMapComponent } from './proximity-map.component';

describe('ProximityMapComponent', () => {
  let component: ProximityMapComponent;
  let fixture: ComponentFixture<ProximityMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProximityMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximityMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
