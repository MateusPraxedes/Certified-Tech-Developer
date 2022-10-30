package aula03;

public class GerenciadorComercial extends Gerenciador {


    @Override
    public void verificar(Mail email) {
        if ((email.getDestino().equalsIgnoreCase("comercial@comeia.com")) || (email.getAssunto().equalsIgnoreCase("Comercial"))){
            System.out.println("Enviado ao departamento Comercial");
        }
        else {
            if(this.getSeguinte() != null){
                this.getSeguinte().verificar(email);
            }
        }
    }




}
