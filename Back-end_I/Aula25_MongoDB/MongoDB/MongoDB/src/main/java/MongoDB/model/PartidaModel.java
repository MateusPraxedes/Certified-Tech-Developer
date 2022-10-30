package MongoDB.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "partida")
public class PartidaModel {

    @Id
    private Integer id;
    private String resultado;
    private EstadoModel estado;
    @Field(name = "equipe_local")
    private EquipeModel equipeLocal;
    @Field(name = "equipe_visitante")
    private EquipeModel equipeVisitante;

    public PartidaModel(){

    }

    public Integer getId() {
        return id;
    }

    public String getResultado() {
        return resultado;
    }

    public EstadoModel getEstado() {
        return estado;
    }

    public EquipeModel getEquipeLocal() {
        return equipeLocal;
    }

    public EquipeModel getEquipeVisitante() {
        return equipeVisitante;
    }

    @Override
    public String toString() {
        return "PartidaModel{" +
                "id=" + id +
                ", resultado='" + resultado + '\'' +
                ", estado=" + estado +
                ", equipeLocal=" + equipeLocal +
                ", equipeVisitante=" + equipeVisitante +
                '}';
    }
}
