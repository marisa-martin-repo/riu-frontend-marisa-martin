import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroeLista } from './superheroe-lista';

describe('SuperheroeLista', () => {
  let component: SuperheroeLista;
  let fixture: ComponentFixture<SuperheroeLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperheroeLista],
    }).compileComponents();

    fixture = TestBed.createComponent(SuperheroeLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
