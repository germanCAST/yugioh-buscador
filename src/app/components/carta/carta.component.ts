import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { CartaService } from '../../services/carta.service';
import { Carta } from '../../interface/carta';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'components-carta',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [CartaService],
  templateUrl: './carta.component.html',
  styleUrl: './carta.component.css',
})
export class CartaComponent implements OnChanges {
  @Input() busqueda: string = '';
  respuesta: Carta[] = [];
  historial: Carta[] = [];

  // almacenamos la data que viene de SearchBox
  constructor(public cartaService: CartaService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['busqueda'].currentValue) {
      this.getData(this.busqueda);
      // this.historial.push(this.respuesta);
      this.busqueda = '';
    }
  }

  getData(Monster: string) {
    this.cartaService.searchSet = Monster;
    this.cartaService.fetchData().subscribe((response) => {
      this.cartaService.responseData = response;
      this.respuesta.push(response);
    });
  }
}
