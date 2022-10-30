package ORM1.service.impl;

import ORM1.entity.EstudanteEntity;
import ORM1.repository.IEstudanteRepository;
import ORM1.service.IEstudanteService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EstudanteServiceImpl implements IEstudanteService<EstudanteEntity> {

    private final IEstudanteRepository estudanteRepository;

    public EstudanteServiceImpl (IEstudanteRepository estudanteRepository){
        this.estudanteRepository = estudanteRepository;
    }

    @Override
    public List<EstudanteEntity> findAllEstudantes(){
        return estudanteRepository.findAll();
    }

    @Override
    public Optional<EstudanteEntity> findEstudantesById(Long id){
        return estudanteRepository.findById(id);
    }

    @Override
    public EstudanteEntity addEstudante(EstudanteEntity estudanteEntity){
        if (estudanteEntity != null){
            return (EstudanteEntity) estudanteRepository.save(estudanteEntity);
        }
        return new EstudanteEntity();
    }

    @Override
    public String deleteEstudante(Long id){
        if (estudanteRepository.findById(id).isPresent()){
            estudanteRepository.deleteById(id);
            return "Estudante deletado!!!";
        }

        return "Estudante não encontrado";

    }

    @Override
    public String updateEstudante(EstudanteEntity estudanteEntity){
        if (estudanteEntity != null && estudanteRepository.findById(estudanteEntity.getId()).isPresent()){
            estudanteRepository.saveAndFlush(estudanteEntity);
            return "Estudante atualizado";
        }
        return "Não foi possivel fazer a atualização do estudante";
    }



}
