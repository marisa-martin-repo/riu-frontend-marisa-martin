import { Injectable } from '@angular/core';
import { SuperHeroeInterface } from '../interfaces/superheroe.interface';
import { SUPERHEROE_DATA } from '../constants/superheroe.constants';

@Injectable({
  providedIn: 'root',
})
export class SuperheroeService {

  private dataSourceService: SuperHeroeInterface[] = SUPERHEROE_DATA;
  
  constructor() {}

  generarId(): number {
    return Math.max(...this.dataSourceService.map(sh => sh.id)) + 1;
  }

  buscarTodos(): SuperHeroeInterface[] {
    return this.dataSourceService;
  }

  buscarPorId(id: number): SuperHeroeInterface[] {
    return this.dataSourceService.filter(sh => sh.id === id);
  }

  buscarPorNombre(nombre: string): SuperHeroeInterface[] {
    return this.dataSourceService.filter(sh => sh.nombre.toLowerCase().includes(nombre.toLowerCase()));
  }

  borrar(id: number): SuperHeroeInterface[] {
    this.dataSourceService = this.dataSourceService.filter(sh => sh.id != id);
    return this.dataSourceService;
  }

  editar(item: SuperHeroeInterface): SuperHeroeInterface[] {
    this.dataSourceService = this.dataSourceService.map((sh) => sh.id === item.id ? { ...sh, ...item } : sh);
    return this.dataSourceService;
  }

  agregar(item: SuperHeroeInterface): SuperHeroeInterface[] {
    this.dataSourceService.push({id: item.id, nombre: item.nombre, contacto: item.contacto, descripcion: item.descripcion, superpoder: item.superpoder});
    return this.dataSourceService;
  }
}

