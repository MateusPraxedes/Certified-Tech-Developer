package MesaDeTrabalho;

public class SerieProxy implements ISerie{

    private Serie serie;
    private int qtdViews;

    public SerieProxy(Serie s) {
        this.serie = s;
        this.qtdViews = 0;
    }

    @Override
    public String getSerie(String nome) {
        this.qtdViews++;
        if(this.qtdViews <= 5){
            System.out.println(nome + " foi assistido " + this.qtdViews + " vezes.");
        }
        else {
            throw new SerieNaoHabilitadaException("A serie "+ nome + " teve uma quantidade de acessos excedido");
        }

        return null ;
    }

}
