import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { componenteContador } from './contador/contador.component';
import { heroComponent } from './heroe/h/heroe.component';
import { FeComponent } from './heroe/fe/fe.component';

@NgModule({
  declarations: [
    AppComponent,
    componenteContador,
    heroComponent,
    FeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
