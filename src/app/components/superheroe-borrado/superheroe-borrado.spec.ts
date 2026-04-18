import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroeBorrado } from './superheroe-borrado';

describe('SuperheroeBorrado', () => {
  let component: SuperheroeBorrado;
  let fixture: ComponentFixture<SuperheroeBorrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperheroeBorrado],
    }).compileComponents();

    fixture = TestBed.createComponent(SuperheroeBorrado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
