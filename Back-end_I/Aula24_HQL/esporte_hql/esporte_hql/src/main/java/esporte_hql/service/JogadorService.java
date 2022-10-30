package esporte_hql.service;


import esporte_hql.entity.JogadorEntity;
import esporte_hql.repository.JogadorRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class JogadorService{

    private JogadorRepository jogadorRepository;

    @Autowired

    public JogadorService(JogadorRepository jogadorRepository) {
        this.jogadorRepository = jogadorRepository;
    }

    public List<JogadorEntity> buscarTodos(){
        return jogadorRepository.findAll();
    }

    public JogadorEntity buscarPorNome(String nome){
        return jogadorRepository.findJogadorByname(nome).get();
    }
}
