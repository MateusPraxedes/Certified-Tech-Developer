package com.aula5;

public class ObjetoBancoDigital {
    public  static void main(String[] args){
        BancoDigital cliente1 = new BancoDigital(1, "Mateus");
        BancoDigital cliente2 = new BancoDigital(2, "Diana");
        cliente1.aumentaDivida(1000.00);
        cliente2.aumentaDivida(4000.00);
        cliente1.pagarDivida(100.00);
        cliente2.pagarDivida(23.00);
    }

}
