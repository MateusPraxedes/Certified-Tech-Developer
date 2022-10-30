package com.dh.ClinicaOdontologica.service.impl;

import com.dh.ClinicaOdontologica.ConfiguracaoJDBC;
import com.dh.ClinicaOdontologica.Dao.UsuarioDaoH2;
import com.dh.ClinicaOdontologica.modal.Usuario;
import com.dh.ClinicaOdontologica.service.UsuarioService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    UsuarioDaoH2 usuarioDaoH2 = new UsuarioDaoH2(new ConfiguracaoJDBC());

    @Override
    public List<Usuario> cadastrar() {

        List<Usuario> listaUsuario = new ArrayList<>();


        Usuario usuario1 = new Usuario("Mateus","mateuspr97@gmail.com","qwer45234","Admin");
        Usuario usuario2 = new Usuario("Arthur","Arthur@dh.com","23rfgtyy","Moderador");

        usuarioDaoH2.cadastrar(usuario1);
        usuarioDaoH2.cadastrar(usuario2);

        listaUsuario.add(usuario1);
        listaUsuario.add(usuario2);


        return listaUsuario;
    }

    @Override
    public Usuario buscar(Integer id) {
        return usuarioDaoH2.buscar(id);
    }

    @Override
    public String deletar(Integer id) {
        usuarioDaoH2.deletar(id);
        return "Usuario deletado" + id;
    }

}
