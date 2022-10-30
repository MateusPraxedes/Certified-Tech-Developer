package MesaDeTrabalho;

public class SerieNaoHabilitadaException extends RuntimeException{

    public SerieNaoHabilitadaException(String msg) {

        super(msg);

    }

    @Override
    public String toString() {
        return getMessage();
    }
}
