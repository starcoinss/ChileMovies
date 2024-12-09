import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagotab2',
  templateUrl: 'pagotab2.page.html',
  styleUrls: ['pagotab2.page.scss'],
})
export class Pagotab2Page {
  isPaymentDone = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    // Obtener el parámetro 'isPaymentDone' de la URL
    this.route.queryParams.subscribe(params => {
      if (params['isPaymentDone'] !== undefined) {
        this.isPaymentDone = params['isPaymentDone'] === 'true'; // Asegurarse de que sea un valor booleano
      }
    });
  }

  // Método para volver a Tab1
  goBack() {
    this.router.navigate(['/tabs/tab1']);  // Cambia la ruta según corresponda en tu app
  }
}
