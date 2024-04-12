import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { CambioContraComponent } from './cambio-contra/cambio-contra.component';
import { IngresarCorreoComponent } from './ingresar-correo/ingresar-correo.component';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';
import { CamaraViewComponent } from './camara-view/camara-view.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'Ingresac', component: IngresarCorreoComponent},
  { path: 'cambiocontra', component: CambioContraComponent},
  { path: 'home', component: HomeInicioComponent}, 
  { path: 'camara', component: CamaraViewComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: '', redirectTo: '/inicio-sesion', pathMatch: 'full' }
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    
  ],
  exports: [
    RouterModule,
    FormsModule
    
    
  ]
})
export class AppRoutingModule { }
