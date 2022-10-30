package esporte_hql.entity;


import javax.persistence.*;
import javax.print.attribute.standard.MediaSize;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Treinador")
public class TreinadorEntity {

    @Id
    @SequenceGenerator(name = "treinador_sequence", sequenceName = "treinador_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_generator")
    private Long id;
    private String nome;
    private int idade;

    @OneToMany(mappedBy = "treinadorEntity",fetch = FetchType.LAZY)
    private Set<JogadorEntity> jogadores = new HashSet<JogadorEntity>();

    public TreinadorEntity(){

    }

    public TreinadorEntity(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public Set<JogadorEntity> getJogadores() {
        return jogadores;
    }

    public void setJogadores(Set<JogadorEntity> jogadores) {
        this.jogadores = jogadores;
    }
}
