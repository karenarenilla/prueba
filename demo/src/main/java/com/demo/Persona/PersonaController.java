package com.demo.Persona;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/persona")
public class PersonaController {
    private PersonaServiceImpl personaService;

    public PersonaController (PersonaServiceImpl personaService) {
        this.personaService = personaService;
    }

    @GetMapping("/{id}")
    public Persona findById(@PathVariable String id){
        return this.personaService.findOne(id);
    }

    @GetMapping
    public List<Persona> findAll() {
        return this.personaService.findAll();
    }

    @PostMapping
    public Persona create(@RequestBody Persona persona) {
        return this.personaService.create(persona);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable String id, @RequestBody Persona persona){
        this.personaService.update(id, persona);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        this.personaService.delete(id);
    }
}
