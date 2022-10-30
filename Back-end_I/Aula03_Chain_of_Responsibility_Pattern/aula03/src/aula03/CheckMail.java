package aula03;

public class CheckMail {

    Gerenciador inicial;

    public CheckMail(){
        this.inicial = new GerenciadorGerencia();
        Gerenciador tecnica = new GerenciadorTecnico();
        Gerenciador comercial = new GerenciadorComercial();
        Gerenciador span = new GerenciadorSpan();

        inicial.setSeguinte(comercial);
        comercial.setSeguinte(tecnica);
        tecnica.setSeguinte(span);
    }

    public void verificar(Mail email){
        inicial.verificar(email);
    }
}
