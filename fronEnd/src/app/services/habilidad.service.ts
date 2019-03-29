import { Injectable } from '@angular/core';
import { Habilidad } from '../models/habilidad';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  selectedHabilidad: Habilidad;
  habilidades: Habilidad[];

  readonly URL_API = 'http://localhost:8080/api/v1/habilidad/';
  
  constructor(private http: HttpClient) {
    this.selectedHabilidad = new Habilidad();

   }

   getHabilidades() {
    return this.http.get(this.URL_API);
  }

  postHabilidad(habilidad: Habilidad) {
    return this.http.post(this.URL_API, habilidad);
  }

  putHabilidad(habilidad: Habilidad) {
    return this.http.put(this.URL_API + `/${habilidad._id}`, habilidad)
  }

  deleteHabilidad(id: String) {
    return this.http.delete(this.URL_API + `/${id}`)
  }

}
