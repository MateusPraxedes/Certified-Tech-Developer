package com.aula2;

import java.util.Scanner;

public class metodomain {
    public static void main(String[] args){
        //Escreva uma função que receba três números e retorne o maior valor entre os três
        //números. Em seguida, faça um programa que permita a entrada de 3 valores pelo
        //usuário, use a função e exiba o resultado.

        int n1, n2, n3, aux;
        Scanner sc = new Scanner(System.in);
        System.out.println("informe o primeiro numero");
        n1 = sc.nextInt();
        System.out.println("informe o segundo numero");
        n2 = sc.nextInt();
        System.out.println("informe o terceiro numero");
        n3 = sc.nextInt();
        aux = MaiorNumero(n1,n2,n3);
        System.out.println("O maior numero e:"+ aux);

}

    public static int MaiorNumero(int n1, int n2, int n3){
        if(n1>n2 && n1>n3){
            return  n1;
        }
        else if(n2>n1 && n2>n3){
            return  n2;
        }
        else{
        return n3;
        }
    }
    }