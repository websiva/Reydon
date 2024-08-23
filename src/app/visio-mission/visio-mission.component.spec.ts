import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisioMissionComponent } from './visio-mission.component';

describe('VisioMissionComponent', () => {
  let component: VisioMissionComponent;
  let fixture: ComponentFixture<VisioMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisioMissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisioMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
