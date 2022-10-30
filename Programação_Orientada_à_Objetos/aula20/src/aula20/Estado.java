package aula20;

public interface Estado {

    void adicionar(Produto produto);
    void cancelar();
    void voltar();
    void avancar();

}
