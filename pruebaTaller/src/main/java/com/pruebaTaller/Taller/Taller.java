package com.pruebaTaller.Taller;

import com.pruebaTaller.Habilidad.Habilidad;
import com.pruebaTaller.Persona.Persona;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

@Document(collection = "taller")
public class Taller {

    @Id
    private String id;

    @DBRef
    Persona idPersona;

    LocalDate fecha;
    String calificacion;
    String lugar;

    @DBRef
    List<Habilidad> habilidades;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Persona getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Persona idPersona) {
        this.idPersona = idPersona;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

    public String getLugar() {
        return lugar;
    }

    public void setLugar(String lugar) {
        this.lugar = lugar;
    }

    public List<Habilidad> getHabilidades() {
        return habilidades;
    }

    public void setHabilidades(List<Habilidad> habilidades) {
        this.habilidades = habilidades;
    }
}
