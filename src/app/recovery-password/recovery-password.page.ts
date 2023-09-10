import { Component } from '@angular/core';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.page.html',
  styleUrls: ['./recovery-password.page.scss'],
})
export class RecoveryPasswordPage {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;

  recoverPassword() {
    // Verificar si el correo ingresado coincide con el correo almacenado en el código
    if (this.email === 'correo@example.com') {
      // Si el correo coincide, mostrar la contraseña
      this.password = 'contraseña123'; // Esta es la contraseña almacenada en el código
      this.showPassword = true;
    } else {
      // Si el correo no coincide, mostrar un mensaje de error o realizar alguna acción adecuada
      console.log('Correo no encontrado');
    }
  }
}
