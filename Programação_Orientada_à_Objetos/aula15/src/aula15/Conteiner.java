package aula15;

public class Conteiner {
    private int numero;
    private String descricao;
    private String paisDeOrigem;
    private Boolean marca;



    public Conteiner(int numero, String descricao, String paisDeOrigem, Boolean marca) {
        this.numero = numero;
        this.descricao = descricao;
        this.paisDeOrigem = paisDeOrigem;
        this.marca = marca;
    }

    public int getNumero() {
        return numero;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getPaisDeOrigem() {
        return paisDeOrigem;
    }

    public Boolean getMarca() {
        return marca;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setPaisDeOrigem(String paisDeOrigem) {
        this.paisDeOrigem = paisDeOrigem;
    }

    public void setMarca(Boolean marca) {
        this.marca = marca;
    }
}
