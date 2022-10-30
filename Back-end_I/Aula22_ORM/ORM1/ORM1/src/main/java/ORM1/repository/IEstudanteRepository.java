package ORM1.repository;


import ORM1.entity.EstudanteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IEstudanteRepository  extends JpaRepository<EstudanteEntity, Long> {

}
