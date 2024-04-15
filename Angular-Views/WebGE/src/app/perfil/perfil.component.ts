import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/usuario-model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  usuarios: UsuarioModel[] = [];
 
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void{
    this.usuarioService.ObtenerUsuario().subscribe((result: UsuarioModel[]) => {
      this.usuarios = result;
    });
  }
}
