import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { IonicStorageModule } from '@ionic/storage-angular';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { NgxQRCodeModule } from 'ngx-qrcode2'; 

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot(),ZXingScannerModule,QRScanner,NgxQRCodeModule,],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    QRScanner, 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
