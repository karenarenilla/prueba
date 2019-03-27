package com.demo.Persona;

import java.util.List;

public interface PersonaService {
    Persona findOne(String id);
    List<Persona> findAll();
    Persona create(Persona persona);
    void update(String id, Persona persona);
    void delete(String id);
}
