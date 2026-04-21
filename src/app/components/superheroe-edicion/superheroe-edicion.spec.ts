import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SuperheroeEdicion } from './superheroe-edicion';
import { provideZoneChangeDetection } from '@angular/core';

describe('SuperheroeEdicion', () => {
  let component: SuperheroeEdicion;
  let fixture: ComponentFixture<SuperheroeEdicion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperheroeEdicion],
      providers: [
      provideZoneChangeDetection({ eventCoalescing: true}),
      { provide: MAT_DIALOG_DATA, useValue: {} },
      { provide: MatDialogRef, useValue: {}}
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperheroeEdicion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
