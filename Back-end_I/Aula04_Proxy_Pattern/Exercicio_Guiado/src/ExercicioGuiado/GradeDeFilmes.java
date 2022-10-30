package ExercicioGuiado;

public class GradeDeFilmes implements IGradeFilmes{

    @Override
    public Filme getFilme(String nomeDoFilme) throws FilmeNaoHabilitadoException {
        Filme f = null;

        switch (nomeDoFilme){
            case "The White Tiger":
                f = new Filme("The White Tiger","ARG", "www.wtiger.com");
                break;
            case "His Houser":
                f = new Filme("His Houser","BRA", "www.hhouser.com");
                break;
            case "Over The Mon":
                f = new Filme("Over The Mon","COL", "www.ommon.com");
                break;
            case "Superbad":
                f = new Filme("Superbad","ARG", "www.sbad.com");
                break;
            case "The Babysitter":
                f = new Filme("The Babysitter","COL", "www.babys.com");
                break;


        }
        return f;
    }
}
