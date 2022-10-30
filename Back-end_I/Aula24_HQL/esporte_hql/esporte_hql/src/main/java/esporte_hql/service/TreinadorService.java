package esporte_hql.service;

import esporte_hql.entity.TreinadorEntity;
import esporte_hql.repository.TreinadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreinadorService {

    private TreinadorRepository treinadorRepository;

    @Autowired

    public TreinadorService(TreinadorRepository treinadorRepository) {
        this.treinadorRepository = treinadorRepository;
    }

    public List<TreinadorEntity> buscarTodos(){
        return treinadorRepository.findAll();
    }

    public TreinadorEntity buscaPorIdade(Integer idade){
        return treinadorRepository.findJogadorByIdade(idade).get();
    }
}
