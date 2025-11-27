import { Component, Input } from '@angular/core';
import { Cliente } from '../../models/cliente';
@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [],
  templateUrl: './cuenta.html',
  styleUrls: ['./cuenta.css'],
})
export class Cuenta {
  public mostrarCuenta: boolean = true;
  public cliente: Cliente;
  constructor() {
    this.cliente = new Cliente(1, 'Martin', 'Simbaña', 'martin@gmail.com', 5000);
  }
  @Input() nombreCliente: string = '';
  mostrarCompCuenta(valor: boolean) {
    this.mostrarCuenta = valor;
  }
}
