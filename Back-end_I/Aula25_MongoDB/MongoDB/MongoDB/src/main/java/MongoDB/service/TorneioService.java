package MongoDB.service;

import MongoDB.model.TorneioModel;
import MongoDB.repository.ITorneioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TorneioService {

    private ITorneioRepository torneioRepository;

    public TorneioService(ITorneioRepository torneioRepository){
        this.torneioRepository = torneioRepository;
    }

    public TorneioModel guardarTorneio(TorneioModel torneio){
        return torneioRepository.save(torneio);

    }

    public List<TorneioModel> listarTorneios(){
        return torneioRepository.findAll();
    }


}
