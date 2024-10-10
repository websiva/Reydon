import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricVehicleBatteryComponent } from './electric-vehicle-battery.component';

describe('ElectricVehicleBatteryComponent', () => {
  let component: ElectricVehicleBatteryComponent;
  let fixture: ComponentFixture<ElectricVehicleBatteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricVehicleBatteryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricVehicleBatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
