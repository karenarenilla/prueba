package com.pruebaTaller.Habilidad;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/habilidad")
public class HabilidadController {
    private HabilidadServiceImpl habilidadService;

    public HabilidadController (HabilidadServiceImpl habilidadService) {
        this.habilidadService = habilidadService;
    }

    @GetMapping("/{id}")
    public Habilidad findById(@PathVariable String id){
        return this.habilidadService.findOne(id);
    }

    @GetMapping
    public List<Habilidad> findAll() {
        return this.habilidadService.findAll();
    }

    @PostMapping
    public Habilidad create(@RequestBody Habilidad habildad) {
        return this.habilidadService.create(habildad);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable String id, @RequestBody Habilidad habilidad){
        this.habilidadService.update(id, habilidad);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        this.habilidadService.delete(id);
    }

}
