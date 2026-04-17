import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuperheroeContenedor } from "./components/superheroe-contenedor/superheroe-contenedor";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SuperheroeContenedor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('riu-mindata');
}
