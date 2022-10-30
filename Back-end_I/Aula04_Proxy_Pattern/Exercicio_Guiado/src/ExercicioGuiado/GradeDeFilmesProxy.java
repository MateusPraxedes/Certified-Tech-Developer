package ExercicioGuiado;

public class GradeDeFilmesProxy implements  IGradeFilmes{

    private GradeDeFilmes gradeDeFilmes;
    private Ip ipRec;

    public GradeDeFilmesProxy(GradeDeFilmes gradeDeFilmes){
        this.setFilme(gradeDeFilmes);
    }

    public void setIp(Ip ip){
        this.ipRec = ip;
    }

    @Override

    public Filme getFilme(String nomeDoFilme) throws FilmeNaoHabilitadoException{
        Filme f = gradeDeFilmes.getFilme(nomeDoFilme);

        if (!(getIp().getPais().equalsIgnoreCase(f.getPais()))){
            throw new FilmeNaoHabilitadoException(nomeDoFilme + " Não diponivel no(a)"+ getIp().getPais());
        }
        return f;
    }

    public  void setFilme(GradeDeFilmes filmes){
        this.gradeDeFilmes = filmes;
    }

    public Ip getIp(){
        return ipRec;
    }
}
