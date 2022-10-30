package com.aula5;

public class BancoDigital {
    private int numeroCliente;
    private  String nome;
    private double divida;

    public BancoDigital(int numeroCliente, String nome) {
        this.numeroCliente = numeroCliente;
        this.nome = nome;
        this.divida = 0.0; //0D
    }

    public void aumentaDivida(Double valor){
        this.divida += valor;
        System.out.println("O saldo devedor do cliente(a)" + this.nome +  "é R$ " + this.divida);
    }

    public void pagarDivida(Double valor){
        this.divida -= valor;
        if(this.divida == 0){
        System.out.println("Não há divida a pagar");}
        else {
            System.out.println("A divida do cliente(a) "+ this.nome + " a pagar esta no valor de R$ " + this.divida);
        }
    }

    public int getNumeroCliente() {
        return numeroCliente;
    }

    public void setNumeroCliente(int numeroCliente) {
        this.numeroCliente = numeroCliente;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getDivida() {
        return divida;
    }


}
