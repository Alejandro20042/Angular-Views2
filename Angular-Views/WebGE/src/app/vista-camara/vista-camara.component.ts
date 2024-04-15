import { Component, OnInit } from '@angular/core';
import { CamaraService } from '../services/camara.service';
import { CamaraModel } from '../models/camaraModel';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-camara',
  templateUrl: './vista-camara.component.html',
  styleUrl: './vista-camara.component.css'
})
export class VistaCamaraComponent implements OnInit {
  camaras: CamaraModel[] = [];
  nuevaCamara: CamaraModel = {
    id: '',
    ubicacion: '',
    estado: '',
    modelo: ''


  };

  constructor(private camaraService: CamaraService, private router: Router, ) { }

  ngOnInit(): void {
    this.obtenerCamaras();
  }

  obtenerCamaras(): void {
    this.camaraService.ObtenerCamaras()
      .subscribe(camaras => this.camaras = camaras);
  }

  agregarCamara(): void{
    this.camaraService.CrearCamara(this.nuevaCamara)
      .subscribe(() => {
        console.log('Camara Agregada');
        this.router.navigate(['/agregarcamara'])
        
      }, error => {

        console.error('Error al intentar crear', error)

      }
    )
  }

  editarCamra(id:string): void{
    this.router.navigate(['/actulizarcamara/id:'+id])
  }

  eliminarCamara(id: string): void {
    this.camaraService.EliminarCamara(id)
      .subscribe(() => {
        console.log('Cámara eliminada correctamente');
        // Actualizar la lista de cámaras después de eliminar una
        this.obtenerCamaras();
      }, error => {
        console.error('Error al intentar eliminar la cámara:', error);
      });
  }
}
