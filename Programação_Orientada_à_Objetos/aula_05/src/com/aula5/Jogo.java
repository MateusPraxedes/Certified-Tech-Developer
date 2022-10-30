package com.aula5;

public class Jogo {
    public  static void main(String[] args){
        UsuarioJogo usuario1  = new UsuarioJogo("Mateus", "Praxedes");
        UsuarioJogo usuario2  = new UsuarioJogo("Diana", "Professora");

        usuario1.increaseLevel();
        usuario1.increaseScore();
        usuario2.increaseLevel();
        usuario1.increaseScore();
    }
}
