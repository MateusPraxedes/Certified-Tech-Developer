package com.aula3;

import java.util.Scanner;

public class Desafio1 {
   /*Implemente um programa que nos permita exibir os
    primeiros "n" números primos pelo console, onde "n"
    é um valor numérico inserido pelo usuário. Por exemplo:
    Com n = 7, o que o programa deve retornar é "Os primeiros
    7 números primos são: 2, 3, 5, 7, 11, 13, 17".*/

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Insira o valor de n");
        int numeroScanner = scanner.nextInt();
        scanner.nextLine(); //vai pra próxima linha pra exibição do resltado ficar melhor

        //contador de números primos e variável i para usar como índice
        int contadorPrimos = 0;
        int numeroSendoVerificado = 1;
        while(contadorPrimos < numeroScanner) {
            int contadorDivisoes = 1;

            //encontre os divisores do número
            for(int i = 2; i <= numeroSendoVerificado; i++) {
                if(numeroSendoVerificado%i == 0) {//se o resto da conta do numeroSendoVerificado/i for igual a 0 ele é mesmo primo
                    contadorDivisoes++; //acrescenta 1 no contador das divisões
                }
            }
            //ver se é primo ou não, pq se o numero dividiu somente suas vezes significa que ele é primo, pois dividiu por um e por ele mesmo
            if(contadorDivisoes == 2) {
                System.out.println(numeroSendoVerificado); // imprime o numero primo
                contadorPrimos++; //acrescenta um no contador de numero primo

            }
            numeroSendoVerificado++; //acrescenta um no numero verificado pra continuar a sequencia e verificar se o próximo é primo
        }
    }
}
