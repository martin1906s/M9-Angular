import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Krake Dev - Escuela de Programación');
  protected readonly subtitle = signal("Bienvenido ,este es mi nuevo proyecto de práctica")
  protected readonly mesaje = signal("Reto 3")
}
