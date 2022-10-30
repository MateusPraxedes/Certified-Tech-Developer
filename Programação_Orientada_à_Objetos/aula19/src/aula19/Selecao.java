package aula19;

import java.util.ArrayList;
import java.util.Objects;

public class Selecao {
    private String nome;
    ArrayList<Jogador> jogadores = new ArrayList<>();

    public Selecao(String nome) {
        this.nome = nome;
    }

    ArrayList<Jogador> reservas = new ArrayList<>();

    public void addJogador(Jogador jogador){
        jogadores.add(jogador);
    }


    public ArrayList<Jogador> obterReserva() {
        for (int i = jogadores.size(); i >= (jogadores.size() - 5); i--) {
            reservas.add(jogadores.get(i));
        }
        return reservas;
    }

    public Integer quantJogadores(String posicao) {
        Integer jogadoresPorPosicao = 0;
        for (Jogador j : jogadores) {
            if (Objects.equals(posicao, j.getPosicao())) {
                jogadoresPorPosicao++;
            }
        }

        return jogadoresPorPosicao;
    }
}
