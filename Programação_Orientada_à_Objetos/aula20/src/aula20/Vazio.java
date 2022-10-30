package aula20;

public class Vazio implements Estado{


    Carrinho c;

    public Vazio(Carrinho c) {
        this.c = c;
    }

    @Override
    public void adicionar(Produto produto) {


    }

    @Override
    public void cancelar() {

    }

    @Override
    public void voltar() {

    }

    @Override
    public void avancar() {

    }
}
