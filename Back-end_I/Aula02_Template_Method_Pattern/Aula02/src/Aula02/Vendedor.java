package Aula02;

public abstract class Vendedor {

    protected String nome;
    protected   int vendas = 0;

    protected int pontosPorVenda;


    public void vender(int qtdVendas){
        this.vendas += qtdVendas;
        System.out.println(this.nome + " realizou " + qtdVendas + " vendas...");
    }

    public abstract int calcularPontos();

    public String mostrarCategoria(){
        int pontosVendedor = calcularPontos();
        return this.nome + " tem um total de " + pontosVendedor + " pontos e categoriza como " + getNomeCategoria(pontosVendedor);
    }

    private String getNomeCategoria(int pontosVendedor){
        if(pontosVendedor < 20){
            return "Vendedor Novato";
        } else if (pontosVendedor < 31) {
            return "Vendedor Aprediz";
        } else if (pontosVendedor < 41) {
            return "Vendedor Bom";
        }
        else {
            return "Vendedor Mestre";
        }
    }




}
