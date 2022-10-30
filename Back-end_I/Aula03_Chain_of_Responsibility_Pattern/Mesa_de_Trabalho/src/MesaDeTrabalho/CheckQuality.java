package MesaDeTrabalho;

public class CheckQuality {

    ControleDeQualidade inicial;

    public CheckQuality(){
        this.inicial = new Lote();
        ControleDeQualidade peso = new Peso();
        ControleDeQualidade embalagem = new Embalagem();


        inicial.setSeguinte(peso);
        peso.setSeguinte(embalagem);
    }

    public void controle(Artigo produto){
        inicial.controle(produto);
    }
}

