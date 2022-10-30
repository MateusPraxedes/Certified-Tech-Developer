package aula19;

public class SelecaoException extends  Exception{

    public SelecaoException() {
    }

    public SelecaoException(String message) {
        super(message);
    }

    @Override
    public String toString() {
        return getMessage();
    }
}
