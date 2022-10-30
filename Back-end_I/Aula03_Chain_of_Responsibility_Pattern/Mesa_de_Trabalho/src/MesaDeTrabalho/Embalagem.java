package MesaDeTrabalho;

public class Embalagem extends ControleDeQualidade{

    @Override
    public void controle(Artigo produto) {
        if (produto.getEmbalagem() == "saudável"  || produto.getEmbalagem() == "quase saudável"){
            System.out.println("Aceito");
        }
        else {
            if(this.getSeguinte() != null){
                this.getSeguinte().controle(produto);
            }

        }
    }
}
