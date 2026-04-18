import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroeContenedor } from './superheroe-contenedor';

describe('SuperheroeContenedor', () => {
  let component: SuperheroeContenedor;
  let fixture: ComponentFixture<SuperheroeContenedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperheroeContenedor],
    }).compileComponents();

    fixture = TestBed.createComponent(SuperheroeContenedor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
