package Aula02;

import java.util.ArrayList;
import java.util.List;

public class Funcionario extends Vendedor {

    private int anosAntiguidade;
//    private List<Afiliados> afiliados = new ArrayList<>();
    private ArrayList<Vendedor> afiliados = new ArrayList<>();



    public Funcionario(String nome,int anosAntiguidade){
        super.nome=nome;
        super.pontosPorVenda = 5;
        this.anosAntiguidade=anosAntiguidade;
    }


    public void adicionarAfiliado(Vendedor afiliado) {
        this.afiliados.add(afiliado);
        System.out.println(afiliado.nome + " agora é afiliado de " + super.nome);
    }

    @Override

    public int calcularPontos(){
        return (this.afiliados.size() * 10) + (this.anosAntiguidade * 5);
    }



}




