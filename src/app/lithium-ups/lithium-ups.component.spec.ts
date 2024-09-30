import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LithiumUPSComponent } from './lithium-ups.component';

describe('LithiumUPSComponent', () => {
  let component: LithiumUPSComponent;
  let fixture: ComponentFixture<LithiumUPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LithiumUPSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LithiumUPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
