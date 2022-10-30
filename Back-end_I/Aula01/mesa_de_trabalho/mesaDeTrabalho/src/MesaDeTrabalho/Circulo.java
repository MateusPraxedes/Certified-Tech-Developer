package MesaDeTrabalho;

public class Circulo extends Figura {

    private Double raio;

    public Circulo(Double raio) {
        this.raio = raio;
    }

    @Override
    public double calcularPerimetro() {
        double perimetro = 2*Math.PI*raio;
        if(raio > 0){
        return  perimetro;}
        return  0;
    }
}
