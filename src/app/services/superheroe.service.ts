import { Injectable } from '@angular/core';
import { SuperHeroeInterface } from '../interfaces/superheroe.interface';
import { MatTableDataSource } from '@angular/material/table';
import { SUPERHEROE_DATA } from '../constants/superheroe.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuperheroeService {

  private dataSourceService: SuperHeroeInterface[] = SUPERHEROE_DATA;
  
  constructor() {}

  obtenerInfo(): SuperHeroeInterface[] {
    return this.dataSourceService;
  }

  generarId(): number {
    return Math.max(...this.dataSourceService.map(sh => sh.id)) + 1;
  }

  buscarPorId(id: number) {
    
  }

  
  buscarPorNombre(nombre: string) {
    
  }

  borrar(id: number): SuperHeroeInterface[] {
    this.dataSourceService = this.dataSourceService.filter(sh => sh.id != id);
    return this.dataSourceService;
  }

  editar(item: SuperHeroeInterface): SuperHeroeInterface[]  {
    this.dataSourceService = this.dataSourceService.map((sh) => sh.id === item.id ? { ...sh, ...item } : sh);
    return this.dataSourceService;
  }

  agregar(item: SuperHeroeInterface): SuperHeroeInterface[]  {
    this.dataSourceService.push(item);
    return this.dataSourceService;
  }
}

