package ExercicioGuiado;

public interface IGradeFilmes {

    public Filme getFilme(String nomeDoFilme) throws FilmeNaoHabilitadoException;
}
