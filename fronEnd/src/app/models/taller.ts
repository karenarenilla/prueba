import { Persona } from './persona';

export class Taller {
  _id: String;
  persona: Persona;
  fecha: Date;
  lugar: String;
  habilidades: Array<String>;

  constructor(id = "", persona = new Persona(), fecha = new Date(), lugar = "", habilidades = [""]) {
    this._id = id;
    this.persona = persona;
    this.fecha = fecha;
    this.lugar = lugar;
    this.habilidades = habilidades;
  }
}
