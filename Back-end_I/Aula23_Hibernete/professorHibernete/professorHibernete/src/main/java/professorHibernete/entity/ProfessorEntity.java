package professorHibernete.entity;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Professor") // definir o nome da tabela
public class ProfessorEntity {

    @Id
    @SequenceGenerator(name = "professor_sequence", sequenceName = "professor_sequence",allocationSize = 1) // vai criar e controlar toda a criação dos nossos ids
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "professor_sequence")
    // será a forma que essa sequência será gerada
    private Long id;
    private String nome;
    private String titulo;

    @OneToMany(mappedBy = "professorEntity", fetch = FetchType.LAZY)
    // o fech indica que quando eu trouxer os professores não trazer os alunos junto
    // porque teria uma trafego grande de dados
    private Set<AlunoEntity> alunos = new HashSet<>();

    public ProfessorEntity() {
    }

    public ProfessorEntity(String nome, String titulo) {
        this.nome = nome;
        this.titulo = titulo;
    }

    public String getNome() {
        return nome;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }


}
