package esporte_hql.entity;


import javax.persistence.*;

@Entity
@Table(name = "Jogador")
public class JogadorEntity {

    @Id
    @SequenceGenerator(name = "jogador_sequence", sequenceName = "jogador_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_generator")
    private Long id;
    private String nome;
    private String clubeFavorito;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "treinador_id")
    private TreinadorEntity treinadorEntity;

    public JogadorEntity(){

    }

    public JogadorEntity(String nome, String clubeFavorito) {
        this.nome = nome;
        this.clubeFavorito = clubeFavorito;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getClubeFavorito() {
        return clubeFavorito;
    }

    public void setClubeFavorito(String clubeFavorito) {
        this.clubeFavorito = clubeFavorito;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
