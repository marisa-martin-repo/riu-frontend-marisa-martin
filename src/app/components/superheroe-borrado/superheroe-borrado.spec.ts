import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperheroeBorrado } from './superheroe-borrado';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideZoneChangeDetection } from '@angular/core';

describe('SuperheroeBorrado', () => {
  let component: SuperheroeBorrado;
  let fixture: ComponentFixture<SuperheroeBorrado>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<SuperheroeBorrado>>;

  const mockData = {
    id: 99,
    nombre: 'Flash',
    contacto: 1212,
    descripcion: 'Velocidad',
    superpoder: 'Speed Force'
  };

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [SuperheroeBorrado],
      providers: [
        provideZoneChangeDetection({ eventCoalescing: true}),
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockData }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperheroeBorrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inyectar correctamente MAT_DIALOG_DATA', () => {
    expect(component.data).toEqual(mockData);
  });

  it('debería inicializar el signal id con el valor recibido', () => {
    expect(component.id()).toBe(mockData.id);
  });

  it('debería cerrar el diálogo al ejecutar onNoClick()', () => {
    component.onNoClick();

    expect(dialogRefSpy.close).toHaveBeenCalledTimes(1);
  });

  it('debería cerrar el diálogo sin parámetros', () => {
    component.onNoClick();

    expect(dialogRefSpy.close).toHaveBeenCalledWith();
  });

  it('no debería modificar el id luego de cerrar', () => {
    component.onNoClick();

    expect(component.id()).toBe(mockData.id);
  });
});