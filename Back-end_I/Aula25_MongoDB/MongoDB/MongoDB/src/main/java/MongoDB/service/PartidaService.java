package MongoDB.service;

import MongoDB.model.EstadoModel;
import MongoDB.model.PartidaModel;
import MongoDB.repository.IPartidaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartidaService {

    private IPartidaRepository partidaRepository;

    public PartidaService(IPartidaRepository partidaRepository){
        this.partidaRepository = partidaRepository;
    }

    public PartidaModel adicionar(PartidaModel partida){
        return partidaRepository.save(partida);
    }

    public  List<PartidaModel> listar(){
        return partidaRepository.findAll();
    }

    public List<PartidaModel> partidaAoVivo(){
        return partidaRepository.findAllByEstado(EstadoModel.AO_VIVO);
    }
}
