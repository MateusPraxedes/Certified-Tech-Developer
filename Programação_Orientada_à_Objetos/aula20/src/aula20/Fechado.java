package aula20;

public class Fechado implements Estado{

    Carrinho c;

    public Fechado(Carrinho c) {
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
