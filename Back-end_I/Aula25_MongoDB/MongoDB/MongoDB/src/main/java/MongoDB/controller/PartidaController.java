package MongoDB.controller;

import MongoDB.model.PartidaModel;
import MongoDB.service.PartidaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/partidas")
public class PartidaController {

    private PartidaService partidaService;

    public PartidaController(PartidaService partidaService){
       this.partidaService = partidaService;
    }

    @PostMapping
    public PartidaModel registrar(@RequestBody PartidaModel partida){
        return partidaService.adicionar(partida);
    }

    @GetMapping
    public List<PartidaModel> listar(){
        return partidaService.listar();
    }

    @GetMapping ("/ao-vivo")
    public List<PartidaModel> partidaAoVivo(){
        return partidaService.partidaAoVivo();
    }
}
