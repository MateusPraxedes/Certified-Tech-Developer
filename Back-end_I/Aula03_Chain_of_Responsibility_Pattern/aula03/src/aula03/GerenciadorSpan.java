package aula03;

public class GerenciadorSpan extends Gerenciador {
    @Override
    public void verificar(Mail email) {
        System.out.println("Marcado como spam");
    }
}
