package aula20;

import java.util.ArrayList;

public class Carrinho{

    private Estado estado;
    private ArrayList<Produto> listaDeProdutos = new ArrayList<>();

    public Carrinho(Estado estado) {
        this.estado = new Vazio(this);
    }



    public void adicionar(Produto produto) {
        getEstado().adicionar(produto);
    }

    public void cancelar() {
        getEstado().cancelar();
    }

    public void voltar() {
        getEstado().voltar();
    }

    public void avancar() {
        getEstado().avancar();
    }

    public void Mostrar() {

        for(Produto produto : listaDeProdutos ){
            System.out.println(produto.getDescricao() +" R$ "+ produto.getPreco());
        }
    }


}
