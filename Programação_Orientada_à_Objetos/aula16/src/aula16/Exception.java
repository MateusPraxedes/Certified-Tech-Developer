package aula16;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Exception {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num1, num2, divisao;

//        System.out.println("Primeiro numero deve ser um valor inteiro");
//        num1 = scanner.nextInt();
//        System.out.println("Divisor, um valor inteiro");
//        num2 = scanner.nextInt();
        try {
            System.out.println("Primeiro numero deve ser um valor inteiro");
            num1 = scanner.nextInt();
            System.out.println("Divisor, um valor inteiro");
            num2 = scanner.nextInt();
            divisao = num1/num2;
            System.out.println(num1 + "/" + num2 + " = "+ divisao);
        }
        catch (InputMismatchException exception){
            System.err.println("Você inseriu um tipo de dado incorreto");
        }
        catch (ArithmeticException exception){
            System.err.println("Tentei dividir por zero");
        }
        finally {
            System.out.println("O exemplo terminou");
        }
    }
}
