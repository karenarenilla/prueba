package com.pruebaTaller.Persona;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PersonaRepository extends MongoRepository<Persona, String> {
}
