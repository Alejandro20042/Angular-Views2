import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CambioContraComponent } from './cambio-contra/cambio-contra.component';
import { IngresarCodigoComponent } from './ingresar-codigo/ingresar-codigo.component';
import { IngresarCorreoComponent } from './ingresar-correo/ingresar-correo.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';
import { CamaraViewComponent } from './camara-view/camara-view.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    CambioContraComponent,
    IngresarCodigoComponent,
    IngresarCorreoComponent,
    RegistroComponent,
    HomeInicioComponent,
    HomeInicioComponent,
    CamaraViewComponent,
    PerfilComponent,

 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
