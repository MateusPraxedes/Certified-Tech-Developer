package MesaDeTrabalho;

public class Lote extends ControleDeQualidade{
    @Override
    public void controle(Artigo produto) {
        if (produto.getLote() > 1000 && produto.getLote() < 2000){
            System.out.println("Aceito");
        }
        else {
            if(this.getSeguinte() != null){
                this.getSeguinte().controle(produto);
            }

    }
}
}
