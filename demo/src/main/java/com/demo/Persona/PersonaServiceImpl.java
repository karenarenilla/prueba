package com.demo.Persona;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaServiceImpl implements PersonaService {

    private PersonaRepository personaRepository;

    public PersonaServiceImpl(PersonaRepository personaRepository){

        this.personaRepository = personaRepository;

    }

    @Override
    public Persona findOne(String id) {
        return this.personaRepository.findById(id).get();
    }

    @Override
    public List<Persona> findAll() {

        return this.personaRepository.findAll();
    }

    @Override
    public Persona create(Persona persona) {

        return this.personaRepository.save(persona);

    }

    @Override
    public void update(String id, Persona persona) {
        Persona tmp = this.personaRepository.findById(id).get();
        if (tmp != null) {
            tmp.setNombre(persona.getNombre());
            tmp.setApellidos(persona.getApellidos());
            tmp.setDireccion(persona.getDireccion());
            tmp.setTelefono(persona.getTelefono());
            tmp.setCorreo(persona.getCorreo());
            this.personaRepository.save(tmp);
        }
    }

    @Override
    public void delete(String id) {
        this.personaRepository.deleteById(id);
    }

}
