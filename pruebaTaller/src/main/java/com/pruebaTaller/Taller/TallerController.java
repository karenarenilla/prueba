package com.pruebaTaller.Taller;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/taller")
public class TallerController {
    private TallerServiceImpl tallerService;

    public TallerController (TallerServiceImpl tallerService) {
        this.tallerService = tallerService;
    }

    @GetMapping("/{id}")
    public Taller findById(@PathVariable String id){
        return this.tallerService.findOne(id);
    }

    @GetMapping
    public List<Taller> findAll() {
        return this.tallerService.findAll();
    }

    @PostMapping()
    public Taller create(@RequestBody Taller taller)
    {
        return this.tallerService.create(taller);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable String id, @RequestBody Taller taller){
        this.tallerService.update(id, taller);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        this.tallerService.delete(id); }
}
