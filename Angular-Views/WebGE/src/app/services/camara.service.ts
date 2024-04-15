import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CamaraModel } from '../models/camaraModel';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CamaraService {

  constructor(private http:HttpClient) { }

  CrearCamara(camara: CamaraModel): Observable<any> {
    return this.http.post<any>(`${enviroment.apiUrl}/camara`, camara);

  }
  ObtenerCamaraPorId(id: string): Observable<CamaraModel>{
    return this.http.get<CamaraModel>(`${enviroment.apiUrl}/${id}`)

  }
  ObtenerCamaras(): Observable<CamaraModel[]>{
    return this.http.get<CamaraModel[]>(`${enviroment.apiUrl}/camara`);

  }
  ActualizarCamara(camara: CamaraModel): Observable<any>{
    return this.http.put<any>(`${enviroment.apiUrl}/camara/${camara.id}`, camara);

  }
  EliminarCamara(id: string): Observable<any>{
    return this.http.delete<any>(`${enviroment.apiUrl}/camara/${id}`);
  }

}
