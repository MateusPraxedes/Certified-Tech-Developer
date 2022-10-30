package aula19;

public class Jogador {

    private String posicao;
    private String sobrenome;
    private Integer numeroCamisa;

    public Jogador(String posicao, String sobrenome, Integer numeroCamisa) {
        this.posicao = posicao;
        this.sobrenome = sobrenome;
        this.numeroCamisa = numeroCamisa;
    }

    public String getPosicao() {
        return posicao;
    }

    public void setPosicao(String posicao) {
        this.posicao = posicao;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public Integer getNumeroCamisa() {
        return numeroCamisa;
    }

    public void setNumeroCamisa(Integer numeroCamisa) {
        this.numeroCamisa = numeroCamisa;
    }
}
