import { Component } from '@angular/core';

@Component({
  selector: 'mi-perfil',
  templateUrl: './mi-perfil.html',
  styleUrl: './mi-perfil.css',
})
export class MiPerfil {
  public nombre;
  public edad;
  public ocupacion;
  public direccion;
  public telefono;
  constructor() {
    console.log('Se cargó el componente de perfil correctamente.');
    this.nombre = 'Martín Simbaña';
    this.edad = 18;
    this.ocupacion = 'Desarrollador';
    this.direccion = 'Calle Falsa 123, Ciudad, País';
    this.telefono = '0987654321';
  }
}
