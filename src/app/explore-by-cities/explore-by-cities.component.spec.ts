import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreByCitiesComponent } from './explore-by-cities.component';

describe('ExploreByCitiesComponent', () => {
  let component: ExploreByCitiesComponent;
  let fixture: ComponentFixture<ExploreByCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreByCitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreByCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
