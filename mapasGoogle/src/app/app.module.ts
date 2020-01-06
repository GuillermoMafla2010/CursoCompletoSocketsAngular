import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapasComponent } from './mapas/mapas.component';
<<<<<<< HEAD
=======


const config: SocketIoConfig = { url: 'http://localhost:5000' };
>>>>>>> 74c619557f1a7709d4dc2112e8e50385e2ec108c

@NgModule({
  declarations: [
    AppComponent,
    MapasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
