package esporte_hql.repository;

import esporte_hql.entity.TreinadorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TreinadorRepository  extends JpaRepository<TreinadorEntity, Long> {

    @Query("select treinador t from Treinador where t.idade = ?1")
    Optional<TreinadorEntity> findJogadorByIdade(Integer idade);
}
