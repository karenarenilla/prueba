package com.pruebaTaller.Habilidad;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HabilidadServiceImpl implements HabilidadService{

    private HabilidadRepository hablidadRepository;

    public HabilidadServiceImpl(HabilidadRepository hablidadRepository){

        this.hablidadRepository = hablidadRepository;

    }

    @Override
    public Habilidad findOne(String id) {
        return this.hablidadRepository.findById(id).get();
    }

    @Override
    public List<Habilidad> findAll() {

        return this.hablidadRepository.findAll();
    }

    @Override
    public Habilidad create(Habilidad habilidad) {

        return this.hablidadRepository.save(habilidad);

    }

    @Override
    public String update(String id, Habilidad habilidad) {
        Habilidad tmp = this.hablidadRepository.findById(id).get();
        if (tmp != null) {
            tmp.setNombre(habilidad.getNombre());
            this.hablidadRepository.save(tmp);
        }
        return "Update";
    }

    @Override
    public String delete(String id) {
        this.hablidadRepository.deleteById(id);
        return "Delete";
    }
}
