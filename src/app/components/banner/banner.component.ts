import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
   // Controla si la card se muestra o no
   showCard = false;

   // Método para alternar la visibilidad de la card
   toggleCard() {
     this.showCard = !this.showCard;
   }
}
