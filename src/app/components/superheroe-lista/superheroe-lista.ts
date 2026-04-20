import {ChangeDetectionStrategy, Component, inject, model, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {SuperheroeBorrado} from '../superheroe-borrado/superheroe-borrado';
import {SuperHeroeInterface} from '../../interfaces/superheroe.interface';
import { SuperheroeEdicion } from '../superheroe-edicion/superheroe-edicion';
import { SuperheroeService } from '../../services/superheroe.service';
import { SUPERHEROE_VACIO } from '../../constants/superheroe.constants';

@Component({
  selector: 'app-superheroe-lista',
  templateUrl: './superheroe-lista.html',
  styleUrl: './superheroe-lista.css',
  imports: [MatButtonToggleModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SuperheroeLista {
  columnaTabla: string[] = ['id', 'nombre', 'contacto', 'descripcion', 'superpoder','operacion'];
  dataSource = new MatTableDataSource<SuperHeroeInterface>();
  valorBuscado: string;
  itemBuscado: string;
  superheroeVacio: SuperHeroeInterface = {...SUPERHEROE_VACIO};
  readonly dialogOperacion = inject(MatDialog);
  private snackBarRespuesta = inject(MatSnackBar);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private superheroeService:  SuperheroeService) {
    this.valorBuscado = '';
    this.itemBuscado = 'nombre';
  }

  ngOnInit(): void {
    this.dataSource.data = this.obtenerInfo();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  obtenerInfo(): SuperHeroeInterface[] {
    return this.superheroeService.obtenerInfo();
  }

  agregar(item: SuperHeroeInterface) {
    item.id = this.superheroeService.generarId();
    
    const dialogRespuesta = this.dialogOperacion.open(SuperheroeEdicion, {
      width: '600px',
      height: '500px',
      data: item
    });

    dialogRespuesta.afterClosed().subscribe(result => {
      if (result !== undefined && result !== '') {
        this.dataSource.data = this.superheroeService.agregar(result);
        this.snackBarRespuesta.open('Superhéroe añadido', '', {duration: 1000});
      }
    });
  }

  editar(item: SuperHeroeInterface) {
    const dialogRespuesta = this.dialogOperacion.open(SuperheroeEdicion, {
      width: '600px',
      height: '500px',
      data: item
    });

    dialogRespuesta.afterClosed().subscribe(result => {
      if (result !== undefined && result !== '') {
        this.dataSource.data = this.superheroeService.editar(result);
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
        this.dataSource.data = this.superheroeService.borrar(id);
        this.snackBarRespuesta.open('Superhéroe eliminado', '', {duration: 1000});
      }
    });
  }

  buscar() {
    if (this.itemBuscado == 'id') {
      const idBuscado = parseInt(this.valorBuscado);
      //servicio BuscarPorId
    } else {
      const nombreBuscado = this.valorBuscado.trim();
      //servicio BuscarPorNombre
    }

  }

  limpiar() {
    this.valorBuscado = '';
  }

}