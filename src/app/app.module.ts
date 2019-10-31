import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeticionComponent } from './peticion/peticion.component';
import { ResultadoComponent } from './resultado/resultado.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // tslint:disable-next-line: deprecation
    HttpModule
  ],
  declarations: [
    AppComponent,
    PeticionComponent,
    ResultadoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
