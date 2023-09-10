import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  goToLogin() {
    // Navegar a la página de inicio de sesión (login)
    this.navCtrl.navigateForward('/login');
  }
}
