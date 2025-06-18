import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hijo } from '../hijo/hijo';

@Component({
  selector: 'app-padre',
  imports: [FormsModule, Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.scss'
})

export class Padre {
  texto: string = '';
  mostrarMensaje: boolean = false;

  manejarEventoPalindromo(): void {
    this.mostrarMensaje = true;
    setTimeout(() => {
      this.mostrarMensaje = false;
    }, 3000);
  }
}
