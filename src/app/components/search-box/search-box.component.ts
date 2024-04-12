import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CartaService } from '../../services/carta.service';
import { Carta } from '../../interface/carta';

@Component({
  selector: 'components-search-box',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  providers: [CartaService],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @Output() eventEmitter = new EventEmitter();
  busqueda: string = '';

  getData(busqueda: string) {
    this.eventEmitter.emit(busqueda);
    this.busqueda = '';
  }
}
