package com.dh.MesaDeTrabalho.service.impl;

import com.dh.MesaDeTrabalho.modal.Veiculo;
import com.dh.MesaDeTrabalho.service.VeiculoService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class VeiculoServiceImpl implements VeiculoService {

 @Override

    public List<Veiculo> listVeiculo() {
     return Arrays.asList(new Veiculo("HB20","Preto"), new Veiculo("i30","Cinza"));


 }

}
