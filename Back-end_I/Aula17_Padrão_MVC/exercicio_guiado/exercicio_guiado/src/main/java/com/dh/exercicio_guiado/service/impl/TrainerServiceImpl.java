package com.dh.exercicio_guiado.service.impl;

import com.dh.exercicio_guiado.modal.Trainer;
import com.dh.exercicio_guiado.service.TrainerService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class TrainerServiceImpl implements TrainerService {

    @Override

    public List<Trainer> listTrainer(){
        return Arrays.asList(new Trainer("Marcos"), new Trainer("Ana"));
    }

}
