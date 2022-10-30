package MesaDeTrabalho;

public class ProcessaArtigo {

    public static void main(String[] args) {

        CheckQuality processo = new CheckQuality();

        processo.controle(new Artigo("Processador",1500,1300,"saudável"));
        processo.controle(new Artigo("Memoria",500,1300,"nada"));
        processo.controle(new Artigo("teclado",1500,1300,"saudável"));

    }
}
