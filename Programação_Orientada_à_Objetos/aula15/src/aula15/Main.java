package aula15;

public class Main {
    public static void main(String[] args) {
        Porto porto = new Porto("Buenos Aires");
        Conteiner conteiner = new Conteiner(1,"teste", "Desconhecida",true);
        Conteiner conteiner2 = new Conteiner(3,"teste", "Brasil",false);
        Conteiner conteiner3 = new Conteiner(3,"teste", "Desconhecida",true);

        porto.entradaConteiner(conteiner);
        porto.entradaConteiner(conteiner2);
        porto.entradaConteiner(conteiner3);

        System.out.println(porto.mostrarConteiersPerigosos());



    }
}
