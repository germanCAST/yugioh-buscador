import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CartaComponent } from '../../components/carta/carta.component';

@Component({
  selector: 'pages-main-page',
  standalone: true,
  imports: [SearchBoxComponent, CartaComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  busquedaObt: string = '';

  getEvent(event: string) {
    this.busquedaObt = event;
  }
}
