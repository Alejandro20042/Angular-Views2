import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamaraService } from '../services/camara.service';
import { CamaraModel } from '../models/camaraModel';

@Component({
  selector: 'app-actualizar-camara',
  templateUrl: './actualizar-camara.component.html',
  styleUrl: './actualizar-camara.component.css'
})
export class ActualizarCamaraComponent implements OnInit{
  
  id:any;
  idLimpio: string = "";


  camaraSeleccionada: CamaraModel = {
    id: '',
    ubicacion: '',
    estado: '',
    modelo: ''
  };

constructor(private router: Router, private camaraService: CamaraService,private route:ActivatedRoute ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')?.toString();
    this.idLimpio = this.id.toString();
    this.idLimpio = this.idLimpio.replace(/id:/g,"");
  }
  

actualizarCamara(): void {
  this.camaraSeleccionada.id = this.idLimpio;
  this.camaraService.ActualizarCamara(this.camaraSeleccionada)
    .subscribe(() => {
      console.log('Cámara actualizada correctamente');
      this.regresar();
    }, error => {
      console.error('Error al intentar actualizar la cámara:', error);
    });
}

  regresar(): void{
    this.router.navigate(['/vistacamara']);
  }
}
