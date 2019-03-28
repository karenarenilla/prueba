package com.pruebaTaller.Taller;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TallerServiceImpl implements TallerService {
    private TallerRepository tallerRepository;

    public TallerServiceImpl(TallerRepository tallerRepository) {
        this.tallerRepository = tallerRepository;
    }

    @Override
    public Taller findOne(String id) {
        return this.tallerRepository.findById(id).get();
    }

    @Override
    public List<Taller> findAll() {

        return this.tallerRepository.findAll();
    }

    @Override
    public Taller create(Taller taller) {

        return this.tallerRepository.save(taller);

    }

    @Override
    public String update(String id, Taller taller) {
        Taller tmp = this.tallerRepository.findById(id).get();
        if (tmp != null) {
            tmp.setIdPersona(taller.getIdPersona());
            tmp.setFecha(taller.getFecha());
            tmp.setCalificacion(taller.getCalificacion());
            tmp.setLugar(taller.getLugar());
            tmp.setHabilidades(taller.getHabilidades());
            this.tallerRepository.save(tmp);
        }
        return "Update";
    }

    @Override
    public String delete(String id) {
        this.tallerRepository.deleteById(id);
        return "Delete";
    }

}
