package MesaDeTrabalho;

public class Peso extends ControleDeQualidade{

    @Override
    public void controle(Artigo produto) {
        if (produto.getPeso() >= 1200 && produto.getPeso() <= 1300){
            System.out.println("Aceito");
        }
        else {
            if(this.getSeguinte() != null){
                this.getSeguinte().controle(produto);
            }

        }
    }
}

