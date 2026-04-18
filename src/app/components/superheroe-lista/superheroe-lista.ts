import {Component, inject, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SuperheroeBorrado} from '../superheroe-borrado/superheroe-borrado';
import {SuperHeroe} from '../../interfaces/superheroe';
import { SuperheroeEdicion } from '../superheroe-edicion/superheroe-edicion';

@Component({
  selector: 'app-superheroe-lista',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './superheroe-lista.html',
  styleUrl: './superheroe-lista.css',
})

export class SuperheroeLista {

  columnaTabla: string[] = ['id', 'nombre', 'contacto', 'descripcion', 'superpoder','operacion'];
  dataSource = new MatTableDataSource<SuperHeroe>(ELEMENT_DATA);
  valorBuscado: string;
  itemVacio: SuperHeroe = {id: 0, nombre: '', contacto: 0, descripcion: '', superpoder: ''};
  readonly dialogOperacion = inject(MatDialog);
  private snackBarRespuesta = inject(MatSnackBar);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.valorBuscado = '';
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editar(item: SuperHeroe) {
    const dialogRespuesta = this.dialogOperacion.open(SuperheroeEdicion, {
      width: '600px',
      height: '400px',
      data: item
    });

    dialogRespuesta.afterClosed().subscribe(result => {
      if (result !== undefined && result !== '') {
        // Llamar al servicio Editar/Añadir
        this.snackBarRespuesta.open('Superhéroe modificado', '', {duration: 1000});
      }
    });
  }

  borrar(id: number) {
    const dialogRespuesta = this.dialogOperacion.open(SuperheroeBorrado, {
      width: '250px',
      data: {id: id}
    });
    
    dialogRespuesta.afterClosed().subscribe(result => {
      if (result !== undefined && result !== '') {
        // Llamar al servicio Eliminar
        this.snackBarRespuesta.open('Superhéroe eliminado', '', {duration: 1000});
      }
    });
  }

  buscar() {
    console.log('Buscar...');
  }

  limpiar() {
    this.valorBuscado = '';
  }

}

const ELEMENT_DATA: SuperHeroe[] = [
  {id: 1, nombre: 'Hydrogen', contacto: 1.0079, descripcion: 'H', superpoder: ''},
  {id: 2, nombre: 'Helium', contacto: 4.0026, descripcion: 'He', superpoder: ''},
  {id: 3, nombre: 'Lithium', contacto: 6.941, descripcion: 'Li', superpoder: ''},
  {id: 4, nombre: 'Beryllium', contacto: 9.0122, descripcion: 'Be', superpoder: ''},
  {id: 5, nombre: 'Boron', contacto: 10.811, descripcion: 'B', superpoder: ''},
  {id: 6, nombre: 'Carbon', contacto: 12.0107, descripcion: 'C', superpoder: ''},
  {id: 7, nombre: 'Nitrogen', contacto: 14.0067, descripcion: 'N', superpoder: ''},
  {id: 8, nombre: 'Oxygen', contacto: 15.9994, descripcion: 'O', superpoder: ''},
  {id: 9, nombre: 'Fluorine', contacto: 18.9984, descripcion: 'F', superpoder: ''},
  {id: 10, nombre: 'Neon', contacto: 20.1797, descripcion: 'Ne', superpoder: ''},
  {id: 11, nombre: 'Sodium', contacto: 22.9897, descripcion: 'Na', superpoder: ''},
  {id: 12, nombre: 'Magnesium', contacto: 24.305, descripcion: 'Mg', superpoder: ''},
  {id: 13, nombre: 'Aluminum', contacto: 26.9815, descripcion: 'Al', superpoder: ''},
  {id: 14, nombre: 'Silicon', contacto: 28.0855, descripcion: 'Si', superpoder: ''},
  {id: 15, nombre: 'Phosphorus', contacto: 30.9738, descripcion: 'P', superpoder: ''},
  {id: 16, nombre: 'Sulfur', contacto: 32.065, descripcion: 'S', superpoder: ''},
  {id: 17, nombre: 'Chlorine', contacto: 35.453, descripcion: 'Cl', superpoder: ''},
  {id: 18, nombre: 'Argon', contacto: 39.948, descripcion: 'Ar', superpoder: ''},
  {id: 19, nombre: 'Potassium', contacto: 39.0983, descripcion: 'K', superpoder: ''},
  {id: 20, nombre: 'Calcium', contacto: 40.078, descripcion: 'Ca', superpoder: ''},
];
