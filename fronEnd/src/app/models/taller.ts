import { Habilidad } from './habilidad';

export class Taller {
  _id: String;
  persona: String;
  fecha: String;
  calificacion: String;
  lugar: String;
  habilidades: Array<Habilidad>;

  constructor(id = "", persona = "", fecha = "", calificacion = "", lugar = "", habilidades = [new Habilidad()]) {
    this._id = id;
    this.persona = persona;
    this.fecha = fecha;
    this.calificacion = calificacion;
    this.lugar = lugar;
    this.habilidades = habilidades;
  }
}
