package aula02;

public class Efetivo extends Funcionario{

    private double salarioBase;
    private double descontos;
    private double bonificacoes;

    public Efetivo(String nome, String sobrenome, String numeroConta, double salarioBase, double descontos, double bonificacoes) {
        super(nome, sobrenome, numeroConta);
        this.salarioBase = salarioBase;
        this.descontos = descontos;
        this.bonificacoes = bonificacoes;
    }

    @Override
    public double calcularSaldo(){
        return salarioBase + bonificacoes - descontos;
    }

    @Override
    public void imprimirRecibo(double quantia){
        System.out.println("\nGerado um recibo -- Funcionario Efetivo --");
    }

    @Override
    public void depositar(double quantia){
        System.out.println("\n Foi depoitada uma qauntia de:" + quantia);
    }

}
