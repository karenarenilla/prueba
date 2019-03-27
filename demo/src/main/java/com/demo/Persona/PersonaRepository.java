package com.demo.Persona;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PersonaRepository extends MongoRepository<Persona, String> {

}
