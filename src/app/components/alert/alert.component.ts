import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  //Alerta de éxito
  @Input() message: string = '';
  alertClass = 'alert-success';

  ngOnInit() {
    setTimeout(() => {
      this.message = '';
    }, 3000); // La alerta desaparece después de 3 segundos
  }
}
