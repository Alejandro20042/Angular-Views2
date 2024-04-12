import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-correo',
  templateUrl: './ingresar-correo.component.html',
  styleUrls: ['./ingresar-correo.component.css']
})
export class IngresarCorreoComponent {

  constructor(private router: Router) {}

  IrCambioContra(){
    
    this.router.navigate(['/cambiocontra']);
  }
}
