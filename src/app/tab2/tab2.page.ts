import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importamos Router para la navegación

interface Movie {
  name: string;
  price: number;
  duration: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  movies: Movie[] = [
    { name: 'Avengers: Endgame', price: 4000, duration: '3h' },
    { name: 'The Batman', price: 4000, duration: '2h 56m' },
    { name: 'Spider-Man: No Way Home', price: 4000, duration: '2h 28m' },
    { name: 'Venom 3', price: 4000, duration: '1h 49m' },
    { name: 'Deadpool 3', price: 4000, duration: '2h 7m' },
    { name: 'Grandes Heroes', price: 4000, duration: '1h 42m' },
    { name: 'Los Increíbles 2', price: 4000, duration: '2h 6m' },
    { name: 'Flash', price: 4000, duration: '2h 24m' },
    { name: 'Interstellar', price: 4000, duration: '2h 49m' },
    { name: 'Forrest Gump', price: 4000, duration: '2h 22m' },
    { name: 'Meteoro', price: 4000, duration: '2h 15m' },
    { name: 'El Padrino', price: 4000, duration: '2h 55m' },
    { name: 'Gladiador', price: 4000, duration: '2h 35m' },
    { name: 'Joker', price: 4000, duration: '2h 2m' },
    { name: 'Romper el círculo', price: 4000, duration: '2h 11m' },
    { name: 'Titanic', price: 4000, duration: '3h 15m' },
    { name: 'El Pianista', price: 4000, duration: '2h 30m' },
    { name: 'El Gran Showman', price: 4000, duration: '1h 45m' },
    { name: 'Fight Club', price: 4000, duration: '2h 8m' },
    { name: 'La La Land', price: 4000, duration: '2h 19m' },
  ];

  // Carrito
  cart: Movie[] = [];
  cartCount = 0;
  cartTotal = 0;
  flashEffect = false;
  isPaymentDone = false;  // Nueva variable para verificar si el pago fue realizado

  constructor(private router: Router) {}

  addToCart(movie: Movie) {
    this.cart.push(movie);
    this.cartCount++;
    this.cartTotal += movie.price;
    this.flashEffect = true;

    setTimeout(() => {
      this.flashEffect = false;
    }, 1000);
  }

  removeFromCart(movie: Movie) {
    const index = this.cart.indexOf(movie);
    if (index > -1) {
      this.cart.splice(index, 1);  // Eliminar del carrito
      this.cartCount--;
      this.cartTotal -= movie.price;
    }
  }

  // Método de pago
  processPayment() {
    if (this.cart.length === 0) {
      alert('Tu carrito está vacío. Añade productos antes de proceder con el pago.');
      return;
    }

    const totalAmount = this.cart.reduce((acc, item) => acc + item.price, 0);
    const paymentSuccessful = this.simulatePayment(totalAmount);

    if (paymentSuccessful) {
      this.isPaymentDone = true;  // Cambiar el estado del pago
      this.router.navigate(['/pagotab2'], { queryParams: { isPaymentDone: this.isPaymentDone } });  // Redirigir a la página de confirmación
      this.clearCart(); // Limpiar el carrito después de realizar el pago
    } else {
      alert('Hubo un problema con el pago. Intenta nuevamente.');
    }
  }

  simulatePayment(amount: number): boolean {
    console.log('Procesando pago de $' + amount);
    return true;  // Simulación exitosa
  }

  clearCart() {
    this.cart = [];
    this.cartCount = 0;
    this.cartTotal = 0;
  }
}
