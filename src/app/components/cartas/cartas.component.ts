import { Component } from '@angular/core';
import { CartaComponent } from '../carta/carta.component';

@Component({
  selector: 'components-cartas',
  standalone: true,
  imports: [CartaComponent],
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.css',
})
export class CartasComponent {}
