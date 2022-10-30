package mesaDeTrabalho;

public class Arvore {

    private String tipo;
    private int altura;
    private int lagura;
    private String cor;

    public Arvore(String tipo) {

        this.tipo = tipo;
        if(this.tipo.equalsIgnoreCase("Ornamentais")){
            this.altura = 200;
            this.lagura = 400;
            this.cor = "verde";
        }

        if(this.tipo.equalsIgnoreCase("Frutíferas")){
            this.altura = 500;
            this.lagura = 300;
            this.cor = "vermelho";
        }

        if(this.tipo.equalsIgnoreCase("Florífera")){
            this.altura = 100;
            this.lagura = 200;
            this.cor = "azul";
        }

    }

    @Override
    public String toString() {
        return "Arvore{" +
                "categoria='" + tipo + '\'' +
                ", altura=" + altura +
                ", lagura=" + lagura +
                ", cor='" + cor + '\'' +
                '}';
    }
}
