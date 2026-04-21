import { TestBed } from '@angular/core/testing';
import { SuperheroeService } from './superheroe.service';
import { SuperHeroeInterface } from '../interfaces/superheroe.interface';

describe('SuperheroeService', () => {
  let service: SuperheroeService;

  const mockData: SuperHeroeInterface[] = [
    { id: 1, nombre: 'Batman', contacto: 1111, descripcion: 'Detective', superpoder: 'Dinero' },
    { id: 2, nombre: 'Superman', contacto: 2222, descripcion: 'Alien', superpoder: 'Fuerza' },
    { id: 3, nombre: 'Spiderman', contacto: 3333, descripcion: 'Joven', superpoder: 'Telarañas' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperheroeService);

    // Sobrescribimos el datasource para test controlado
    (service as any).dataSourceService = [...mockData];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería generar un nuevo ID', () => {
    const newId = service.generarId();
    expect(newId).toBe(4);
  });

  it('debería devolver todos los héroes', () => {
    const result = service.buscarTodos();
    expect(result.length).toBe(3);
    expect(result).toEqual(mockData);
  });

  it('debería buscar por ID', () => {
    const result = service.buscarPorId(1);
    expect(result.length).toBe(1);
    expect(result[0].nombre).toBe('Batman');
  });

  it('debería devolver vacío si no encuentra ID', () => {
    const result = service.buscarPorId(999);
    expect(result.length).toBe(0);
  });

  it('debería buscar por nombre (case insensitive)', () => {
    const result = service.buscarPorNombre('man');
    expect(result.length).toBe(3);
  });

  it('debería devolver coincidencias parciales por nombre', () => {
    const result = service.buscarPorNombre('bat');
    expect(result.length).toBe(1);
    expect(result[0].nombre).toBe('Batman');
  });

  it('debería borrar un héroe', () => {
    const result = service.borrar(1);
    expect(result.length).toBe(2);
    expect(result.find(h => h.id === 1)).toBeUndefined();
  });

  it('debería editar un héroe', () => {
    const updated: SuperHeroeInterface = {
      id: 1,
      nombre: 'Batman Updated',
      contacto: 8888,
      descripcion: 'Nuevo',
      superpoder: 'Más dinero'
    };

    const result = service.editar(updated);
    const hero = result.find(h => h.id === 1);

    expect(hero?.nombre).toBe('Batman Updated');
    expect(hero?.contacto).toBe(8888);
  });

  it('debería agregar un nuevo héroe', () => {
    const newHero: SuperHeroeInterface = {
      id: 4,
      nombre: 'Flash',
      contacto: 5656,
      descripcion: 'Velocidad',
      superpoder: 'Speed Force'
    };

    const result = service.agregar(newHero);

    expect(result.length).toBe(4);
    expect(result.find(h => h.id === 4)).toBeTruthy();
  });
});