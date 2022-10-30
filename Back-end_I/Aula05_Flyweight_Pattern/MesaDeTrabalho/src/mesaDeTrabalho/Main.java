package mesaDeTrabalho;

public class Main {

    public static void main(String[] args) {

        ArvoreFactory arvore = new ArvoreFactory();
        Runtime runtime = Runtime.getRuntime();
        for (int i = 0 ; i <= 10 ; i++ ){
            Arvore verde = arvore.plantar("Ornamentais");
            ;}

        for (int i = 0 ; i <= 10 ; i++ ){
            Arvore verde = arvore.plantar("Frutíferas");
            ;}

    }

}
