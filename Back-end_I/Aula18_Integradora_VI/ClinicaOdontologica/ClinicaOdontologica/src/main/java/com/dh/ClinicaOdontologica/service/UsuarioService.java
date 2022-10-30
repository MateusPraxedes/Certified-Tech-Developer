package com.dh.ClinicaOdontologica.service;

import com.dh.ClinicaOdontologica.modal.Usuario;

import java.util.List;

public interface UsuarioService {


    public List<Usuario> cadastrar();

    public Usuario buscar(Integer id);

    public String deletar (Integer id);

}
