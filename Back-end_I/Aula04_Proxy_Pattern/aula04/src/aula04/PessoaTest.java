package aula04;

import org.junit.jupiter.api.Test;

import java.util.Date;

public class PessoaTest {

    Date data = new Date();

    @Test

    public  void vacinar(){
        Pessoa p1 = new Pessoa("Juca", "Silva", "1234567891", data, "Pfizer");
        Vacinar vacinar= new ServicoVacinarProxy();

        vacinar.vacinarPessoa(p1.getRg(), p1.getDataVacina(), p1.getNomeVacina());
        System.out.println(p1.toString());
    }

}
