export class Persona {
  _id: String;
  nombre: String;
  apellidos: String;
  direccion: String;
  telefono: String;
  correo: String;

  constructor(id = "", nombre = "", apellidos = "", direccion = "", telefono = "", correo = "") {
    this._id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.direccion = direccion;
    this.telefono = telefono;
    this.correo = correo;
  }
}
