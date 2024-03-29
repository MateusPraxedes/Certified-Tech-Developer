package com.dh.MesaDeTrabalho.controller;

import com.dh.MesaDeTrabalho.modal.Veiculo;
import com.dh.MesaDeTrabalho.service.VeiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/veiculo")
public class VeiculoController {

    public final VeiculoService veiculoService;

    @Autowired
    public VeiculoController(VeiculoService veiculoService){
        this.veiculoService = veiculoService;
    }

    @GetMapping

    public List<Veiculo> getVeiculo(){
        return veiculoService.listVeiculo();
    }

}
