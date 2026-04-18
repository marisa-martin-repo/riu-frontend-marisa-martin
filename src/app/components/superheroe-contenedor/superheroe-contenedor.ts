import { Component } from '@angular/core';
import { SuperheroeLista } from '../superheroe-lista/superheroe-lista';

@Component({
  selector: 'app-superheroe-contenedor',
  standalone: true,
  imports: [SuperheroeLista],
  templateUrl: './superheroe-contenedor.html',
  styleUrl: './superheroe-contenedor.css',
})

export class SuperheroeContenedor {}
