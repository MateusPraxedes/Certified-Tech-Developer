package mesaDeTrabalho;

public class Endereco {

    private Integer id;
    private String rua;
    private Integer numero;
    private String cidade;
    private String bairro;

    private Integer idPaciente;

    public Endereco(Integer id, String rua, Integer numero, String cidade, String bairro, Integer idPaciente) {
        this.id = id;
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.bairro = bairro;
        this.idPaciente = idPaciente;
    }

    public Endereco(String rua, Integer numero, String cidade, String bairro) {

        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.bairro = bairro;

    }




    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdPaciente() {
        return idPaciente;
    }

    public void setIdPaciente(Integer idPaciente) {
        this.idPaciente = idPaciente;
    }

    @Override
    public String toString() {
        return "Endereco{" +
                "id=" + id +
                ", rua='" + rua + '\'' +
                ", numero=" + numero +
                ", cidade='" + cidade + '\'' +
                ", bairro='" + bairro + '\'' +
                ", idPaciente=" + idPaciente +
                '}';
    }
}
