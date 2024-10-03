import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyStorageSystemComponent } from './energy-storage-system.component';

describe('EnergyStorageSystemComponent', () => {
  let component: EnergyStorageSystemComponent;
  let fixture: ComponentFixture<EnergyStorageSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnergyStorageSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyStorageSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
