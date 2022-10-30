package MesaDeTrabalho;

public  abstract class ControleDeQualidade {

    protected  ControleDeQualidade controleSeguinte;

    public ControleDeQualidade getSeguinte(){
        return this.controleSeguinte;
    }

    public void setSeguinte(ControleDeQualidade m){
        this.controleSeguinte = m;
    }

    public abstract void controle(Artigo produto);
}
