package com.dh.ClinicaOdontologica.controller;

import com.dh.ClinicaOdontologica.modal.Usuario;
import com.dh.ClinicaOdontologica.service.impl.UsuarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsuarioController {

    private final UsuarioServiceImpl usuarioService;

    public UsuarioController(UsuarioServiceImpl usuarioService) {
        this.usuarioService = usuarioService;
    }


    @Autowired

    @GetMapping(value = "/cadastro")

    public List<Usuario> cadastrar(){
        return usuarioService.cadastrar();
    }

    @RequestMapping(value = "/buscar", method = RequestMethod.GET)

    public Usuario buscar(Model model, @RequestParam("id") Integer id){
        return usuarioService.buscar(id);
    }

    @RequestMapping(value = "/deletar", method = RequestMethod.GET)
    public String deletar(Model model, @RequestParam("id") Integer id){
        return usuarioService.deletar(id);
    }

}
