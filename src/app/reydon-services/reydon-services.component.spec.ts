import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReydonServicesComponent } from './reydon-services.component';

describe('ReydonServicesComponent', () => {
  let component: ReydonServicesComponent;
  let fixture: ComponentFixture<ReydonServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReydonServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReydonServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
