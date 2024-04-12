import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css',
})
export class RegistroComponent {

  correo: string= "";
  contra: string= "";
  mensajeError: string = "";

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  RegistrarUsuario() {
    if (!this.correo || !this.contra) {
      this.mensajeError = "Por favor ingresa correo y contraseña";
      return;
    }

    this.usuarioService.RegistroUsuario(this.correo, this.contra).subscribe(
      () => {
        // Registro exitoso, redirige al usuario a otra página, por ejemplo, la página de inicio de sesión
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error(error);
        this.mensajeError = 'Error al registrar usuario';
      }
    );
  }

}
