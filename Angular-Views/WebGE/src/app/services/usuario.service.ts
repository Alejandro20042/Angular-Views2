import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, RegistroModel, UsuarioModel } from '../models/usuario-model';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "drivers";

  constructor(private http:HttpClient) {}

  RegistroUsuario(correo: string, contraseña: string): Observable<any> {
    const nuevoUsuario = { correo, contraseña };
    return this.http.post<any>(`${enviroment.apiUrl}/Usuario/`, nuevoUsuario);
  }
   

    login(loginDatos: LoginModel): Observable<any>{
      return this.http.post<any>(`${enviroment.apiUrl}/Usuario/login`, loginDatos);
    }

    ObtenerUsuarioPorId(id: string): Observable<UsuarioModel> {
      return this.http.get<UsuarioModel>(`${enviroment.apiUrl}/${id}`);
    
    }
    ObtenerUsuario(): Observable<UsuarioModel[]>{
      return this.http.get<UsuarioModel[]>(`${enviroment.apiUrl}/usuario`);  
    }

    ActualizarUsuario(usuario: UsuarioModel): Observable<any>{
      return this.http.put<any>(`${enviroment.apiUrl}/${usuario.id}`,usuario);

    }
    EliminarUsuario(id: string): Observable<any>{
      return this.http.delete<any>(`${enviroment.apiUrl}/${id}`);
      
    } 
}
