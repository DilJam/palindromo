import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.scss',
})
export class Hijo {
  @Input() texto: string = '';
  @Output() palindromoDetectado = new EventEmitter<void>();

  esPalindromo(): boolean {
    if (!this.texto) return false;
    const textoLimpio = this.texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    const textoReverso = textoLimpio.split('').reverse().join('');
    const esPalindromo = textoLimpio === textoReverso;

    if (esPalindromo) {
      this.palindromoDetectado.emit();
    }
    return esPalindromo;
  }

  contarCaracteres(): number {
    if (!this.texto) return 0;
    const coincidencias = this.texto.match(/[a-zA-Z]/g);
    return coincidencias ? coincidencias.length : 0;
  }
}
