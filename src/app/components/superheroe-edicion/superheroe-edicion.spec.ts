import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroeEdicion } from './superheroe-edicion';

describe('SuperheroeEdicion', () => {
  let component: SuperheroeEdicion;
  let fixture: ComponentFixture<SuperheroeEdicion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperheroeEdicion],
    }).compileComponents();

    fixture = TestBed.createComponent(SuperheroeEdicion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
