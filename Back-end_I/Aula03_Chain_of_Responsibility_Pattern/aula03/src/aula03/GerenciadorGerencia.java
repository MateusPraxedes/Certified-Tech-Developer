package aula03;

public class GerenciadorGerencia extends Gerenciador {

    @Override
    public void verificar(Mail email) {
        if ((email.getDestino().equalsIgnoreCase("gerencia@comeia.com")) || (email.getAssunto().equalsIgnoreCase("Gerência"))){
            System.out.println("Enviado ao departamento Gerencial");
        }
        else {
            if(this.getSeguinte() != null){
                this.getSeguinte().verificar(email);
            }
        }
    }
}
