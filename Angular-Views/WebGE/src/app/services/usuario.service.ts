import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, UsuarioModel } from '../models/usuario-model';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "drivers";

  constructor(private http:HttpClient) {}

    RegistroUsuario(correo: string, contra: string): Observable<any>{
      const nuevoUsuario = {correo, contra};
      return this.http.post<any>(`${enviroment.apiUrl}/registro`, nuevoUsuario)

    }
    login(loginDatos: LoginModel): Observable<any>{
      return this.http.post<any>(`${enviroment.apiUrl}/Usuario/login`, loginDatos);
    }

    ObtenerUsuarioPorId(id: string): Observable<UsuarioModel> {
      return this.http.get<UsuarioModel>(`${enviroment.apiUrl}/${id}`);
    
    }
    ObtenerUsuario(): Observable<UsuarioModel[]>{
      return this.http.get<UsuarioModel[]>(`${enviroment.apiUrl}`);  
    }

    ActualizarUsuario(usuario: UsuarioModel): Observable<any>{
      return this.http.put<any>(`${enviroment.apiUrl}/${usuario.id}`,usuario);

    }
    EliminarUsuario(id: string): Observable<any>{
      return this.http.delete<any>(`${enviroment.apiUrl}/${id}`);
      
    } 
}
