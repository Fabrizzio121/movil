import { Component } from '@angular/core';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQRPage {
  elementType = 'url'; // Tipo de elemento (enlace URL)
  qrData = 'https://www.ejemplo.com'; // Datos para el código QR

  constructor() {}
}

