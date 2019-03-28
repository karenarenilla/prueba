import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  selectedPersona: Persona;
  personas: Persona[];

  readonly URL_API = 'http://localhost:8080/api/v1/persona/';

  constructor(private http: HttpClient) {
    this.selectedPersona = new Persona();
  }

  getPersonas() {
    return this.http.get(this.URL_API);
  }

  postPersona(persona: Persona) {
    return this.http.post(this.URL_API, persona);
  }

  putPersona(persona: Persona) {
    return this.http.put(this.URL_API + `/${persona._id}`, persona)
  }

  deletePersona(id: String) {
    return this.http.delete(this.URL_API + `/${id}`)
  }

}
