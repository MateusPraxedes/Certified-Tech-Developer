package esporte_hql.repository;

import esporte_hql.entity.JogadorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface JogadorRepository extends JpaRepository<JogadorEntity, Long> {

    @Query("select jogador j from Jogador where j.nome = ?1")
    Optional<JogadorEntity> findJogadorByname(String name);//?1 vai pegar exatamente o nome
    // que eu vou passar no meu findJogadorByName



}
