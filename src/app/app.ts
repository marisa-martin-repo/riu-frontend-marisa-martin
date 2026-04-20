import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuperheroeLista } from "./components/superheroe-lista/superheroe-lista";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SuperheroeLista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('riu-mindata');
}
