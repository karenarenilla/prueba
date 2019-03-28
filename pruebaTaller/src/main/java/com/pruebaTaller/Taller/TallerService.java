package com.pruebaTaller.Taller;

import java.util.List;

public interface TallerService {
    Taller findOne(String id);
    List<Taller> findAll();
    Taller create(Taller taller);
    String update(String id, Taller taller);
    String delete(String id);
}
