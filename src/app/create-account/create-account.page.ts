import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage {
  name: string = '';
  email: string = '';
  password: string = '';

  // Estructura de datos para almacenar las cuentas temporales
  accounts: { name: string, email: string, password: string }[] = [];

  constructor(private navCtrl: NavController, private storage: Storage) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
  }

  registerAccount() {
    // Crear un objeto de cuenta
    const newAccount = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    // Obtener cuentas almacenadas en el almacenamiento local (si existen)
    this.storage.get('accounts').then((accounts: any[]) => {
      if (accounts) {
        // Si ya hay cuentas registradas, agregar la nueva cuenta
        accounts.push(newAccount);
      } else {
        // Si no hay cuentas registradas aún, crear un arreglo con la nueva cuenta
        accounts = [newAccount];
      }

      // Almacenar la lista actualizada de cuentas en el almacenamiento local
      this.storage.set('accounts', accounts);

      // Redirigir al usuario a la página de inicio de sesión (login)
      this.navCtrl.navigateForward('/login');
    });
  }
}
