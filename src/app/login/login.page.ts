import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private storage: Storage) {}

  login() {
    // Obtener cuentas almacenadas en el almacenamiento local
    this.storage.get('accounts').then((accounts: any[]) => {
      if (accounts) {
        // Buscar una cuenta que coincida con el correo electrónico y la contraseña ingresados
        const account = accounts.find((acc) => acc.email === this.email && acc.password === this.password);

        if (account) {
          // Credenciales válidas, redirigir a la página principal
          this.navCtrl.navigateForward('/home');
        } else {
          // Credenciales inválidas, mostrar un mensaje de error
          console.log('Credenciales inválidas');
        }
      } else {
        // No hay cuentas registradas, mostrar un mensaje de error
        console.log('No hay cuentas registradas');
      }
    });
  }

  forgotPassword() {
    // Lógica para la página de recuperación de contraseña (puedes crear esta página más adelante)
    this.navCtrl.navigateForward('/recovery-password');
  }

  createAccount() {
    // Lógica para la página de creación de cuenta (puedes crear esta página más adelante)
    this.navCtrl.navigateForward('/create-account');
  }
}
