import { Component } from '@angular/core';
import { CamaraService } from '../services/camara.service';
import { CamaraModel } from '../models/camaraModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-camara',
  templateUrl: './agregar-camara.component.html',
  styleUrl: './agregar-camara.component.css'
})
export class AgregarCamaraComponent {
  
  camaras: CamaraModel[] = [];
  nuevaCamara: CamaraModel = {
    id: '',
    ubicacion: '',
    estado: '',
    modelo: ''
  };

  constructor(private camaraService: CamaraService, private router: Router){}

  agregarCamara(): void{
    this.camaraService.CrearCamara(this.nuevaCamara)
      .subscribe(() => {
        console.log('Camara Agregada');
        
        this.router.navigate(['/vistacamara']);
        this.obtenerCamaras();

      }, error => {

        console.error('Error al intentar crear', error)

      }
    )
  }

  irVistaCamara(): void{
    this.router.navigate(['/agregarcamara']);
  }
  regresar(): void{
    this.router.navigate(['/vistacamara']);
  }

  obtenerCamaras(): void {
    this.camaraService.ObtenerCamaras()
      .subscribe(camaras => this.camaras = camaras);
  }

}
