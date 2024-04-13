import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { LoginModel, UsuarioModel } from '../models/usuario-model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-inicio-sesion',
  imports: [RouterOutlet, RouterModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  correo: string = '';
  contra: string = '';
  mensajeError: string = '';
  
  loginForm: FormGroup;

  constructor(private router: Router, private usuarioService: UsuarioService, private http: HttpClient) {

    this.loginForm = new FormGroup({
      correo: new FormControl(''),
      contra: new FormControl('')
    });
    console.log(this.loginForm.get('correo')?.value)
    console.log(this.loginForm.get('contra')?.value)
  }

  iniciarSesion() {
    let loginDatos:LoginModel = {
      correo: this.loginForm.get('correo')?.value,
      contraseña: this.loginForm.get('contra')?.value
    }
  
    if(!loginDatos.correo || !loginDatos.contraseña){

      this.mensajeError = "Porfavor Ingresa correo y contraseña";
    }
    this.usuarioService.login({correo: loginDatos.correo, contraseña: loginDatos.contraseña}).subscribe(
      (response) => {
        
        this.router.navigate(['/home'])
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
