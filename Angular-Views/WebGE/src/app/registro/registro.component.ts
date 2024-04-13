import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { RegistroModel } from '../models/usuario-model';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  standalone: true,
  imports:[ReactiveFormsModule],
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  correo: string = '';
  contra: string = '';
  mensajeError: string = '';

  registroForm: FormGroup;

  constructor(private router: Router, private usuarioService: UsuarioService, private http: HttpClient) {
    this.registroForm = new FormGroup({
      correo: new FormControl(''),
      contra: new FormControl('')
    });
  }

  RegistrarUsuario() {
    let registroDatos: RegistroModel = {
      correo: this.registroForm.get('correo')?.value,
      contraseña: this.registroForm.get('contra')?.value
      
    };

    if (!registroDatos.correo || !registroDatos.contraseña) {
      this.mensajeError = "Por favor ingresa correo y contraseña";
      return;
    }

    this.usuarioService.RegistroUsuario(registroDatos.correo, registroDatos.contraseña).subscribe(
      (response) => {
        this.router.navigate(['/inicio-sesion']);
        console.log(response);
      },
      (error) => {
        this.mensajeError = 'Correo o Contraseña Incorrectos';
        console.error(error);
      }
    );
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }

  irSolicitud() {
    this.router.navigate(['/solicitud']);
  }
}
