package com.pruebaTaller.Persona;

import java.util.List;

public interface PersonaService {
    Persona findOne(String id);
    List<Persona> findAll();
    Persona create(Persona persona);
    String update(String id, Persona persona);
    String delete(String id);
}
