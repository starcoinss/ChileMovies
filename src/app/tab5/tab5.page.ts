import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
  isLoginMode: boolean = true; // Alterna entre inicio de sesión y registro
  email: string = '';
  password: string = '';
  registerEmail: string = '';
  registerPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string | null = null;
  successMessage: string | null = null; // Mensaje de éxito

  // Variable para simular una base de datos de usuarios
  users: { email: string; password: string }[] = [];

  constructor(private navCtrl: NavController) {}

  // Cambiar entre inicio de sesión y registro
  switchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = null;
    this.successMessage = null; // Limpiar el mensaje de éxito al cambiar de modo
  }

  // Iniciar sesión
  login() {
    const user = this.users.find(
      (u) => u.email === this.email && u.password === this.password
    );

    if (user) {
      this.successMessage = '¡Bienvenido de nuevo! Has iniciado sesión correctamente.';
      this.errorMessage = null;
      setTimeout(() => {
        this.navCtrl.navigateForward('/tabs/tab1'); // Redirigir después de iniciar sesión
      }, 2000); // Esperar 2 segundos para mostrar el mensaje
    } else {
      this.errorMessage = 'Correo o contraseña incorrectos.';
      this.successMessage = null; // Limpiar el mensaje de éxito si hay un error
    }
  }

  // Registrar usuario
  register() {
    if (this.registerPassword !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      this.successMessage = null;
      return;
    }

    const existingUser = this.users.find((u) => u.email === this.registerEmail);
    if (existingUser) {
      this.errorMessage = 'Este correo ya está registrado.';
      this.successMessage = null;
      return;
    }

    // Agregar usuario a la "base de datos"
    this.users.push({ email: this.registerEmail, password: this.registerPassword });

    console.log('Usuarios registrados:', this.users); // Para verificar en consola
    this.successMessage = '¡Te has registrado correctamente!';
    this.errorMessage = null;
    setTimeout(() => {
      this.switchMode(); // Cambiar al modo de inicio de sesión después del registro
    }, 2000); // Esperar 2 segundos para mostrar el mensaje
  }
}
