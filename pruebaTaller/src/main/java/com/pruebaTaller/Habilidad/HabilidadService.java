package com.pruebaTaller.Habilidad;

import java.util.List;

public interface HabilidadService {
    Habilidad findOne(String id);
    List<Habilidad> findAll();
    Habilidad create(Habilidad habilidad);
    String update(String id, Habilidad habilidad);
    String delete(String id);
}
