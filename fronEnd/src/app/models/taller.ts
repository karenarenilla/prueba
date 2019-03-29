import { Habilidad } from './habilidad';
import { Persona } from './persona';

export class Taller {
  _id: String;
  persona: Persona;
  fecha: String;
  calificacion: String;
  lugar: String;
  habilidades: Array<Habilidad>;

  constructor(id = "", persona = new Persona(), fecha = "", calificacion = "", lugar = "", habilidades = [new Habilidad()]) {
    this._id = id;
    this.persona = persona;
    this.fecha = fecha;
    this.calificacion = calificacion;
    this.lugar = lugar;
    this.habilidades = habilidades;
  }
}
