package aula03;

public class GerenciadorTecnico extends  Gerenciador{

    @Override
    public void verificar(Mail email) {
        if ((email.getDestino().equalsIgnoreCase("tecnica@comeia.com")) || (email.getAssunto().equalsIgnoreCase("Gerencia"))){
            System.out.println("Enviado ao departamento Técnica");
        }
        else {
            if(this.getSeguinte() != null){
                this.getSeguinte().verificar(email);
            }
        }
    }
}
