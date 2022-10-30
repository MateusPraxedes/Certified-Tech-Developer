package aula15;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Objects;

public class Porto {

    private String nome;

    private ArrayList<Conteiner> conteineres = new ArrayList<>();

    public Porto(String nome) {
        this.nome = nome;
    }

    public void entradaConteiner(Conteiner conteiner){
        conteineres.add(conteiner);
    }


    public int mostrarConteiersPerigosos (){
//         Collections.sort(conteineres);
        int cont = 0;
        for (Conteiner conteiner: conteineres ) {
            if (conteiner.getMarca() && Objects.equals(conteiner.getPaisDeOrigem(), "Desconhecida")){
                cont++;
            }

        }
        return cont;
    }





    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
