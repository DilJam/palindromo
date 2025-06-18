||	Taller Angular 1	||

#  Descripción de actividades del taller

###  **Actividad 1: Two-Way Binding (Análisis de texto en tiempo real)**

- Se creó el componente `HijoComponent` (dentro de `components/hijo`).
- En este componente inicialmente se agregó un `<input>` de texto.
- Se aplicó **two-way binding** con `[(ngModel)]` para capturar el texto en tiempo real.
- Cada vez que el usuario escribe:
  - Se determina si el texto es un palíndromo.
  - Se cuenta la cantidad de vocales.
  - Ambas informaciones se muestran inmediatamente debajo del input.

###  **Actividad 2: Comunicación Padre → Hijo con `@Input()`**

- Se creó el componente `PadreComponent` (dentro de `components/padre`).
- El `input` ahora está en el padre.
- El valor del input en el padre se envía al hijo mediante `@Input()`.
- El hijo ya no tiene su propio input. Solo recibe el texto desde el padre y realiza:
  - Evaluación de palíndromo.
  - Conteo de vocales.
- Toda la lógica de análisis permanece encapsulada en el hijo.

---

###  **Actividad 3: Comunicación Hijo → Padre con `@Output()`**

- Se agregó un `EventEmitter` decorado con `@Output()` en el `HijoComponent`.
- Cada vez que el texto recibido es un palíndromo, el hijo emite un evento al padre.
- El padre escucha este evento y muestra un mensaje de confirmación
