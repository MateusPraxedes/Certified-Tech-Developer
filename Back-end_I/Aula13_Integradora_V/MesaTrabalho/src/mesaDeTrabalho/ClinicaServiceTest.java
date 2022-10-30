package mesaDeTrabalho;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.sql.Date;
import java.sql.SQLException;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class ClinicaServiceTest {

    ClinicaService clinicaService;

    @BeforeEach
    void doBefore(){
        clinicaService = new ClinicaService(new ClinicaDaoH2(new ConfiguracaoJDBC()));
    }

    @Test
    public void guardarPacienteEndereco() throws SQLException {
        Endereco endereco = new Endereco("SMLN Trecho 7", 4, "Lago Norte", "Brasilia");
        Paciente paciente = new Paciente("Marcelo", "Barbosa", "1098393", "2022/12/5", endereco);

        Endereco endereco2 = new Endereco("Avenida Brasil", 344, "Centro", "São Paulo");
        Paciente paciente2 = new Paciente("Carolina", "Alves", "BR273738", "2022/12/5", endereco2);

        Endereco endereco3 = new Endereco("Rua das Flores", 67, "Jardim Ingá", "Maringá");
        Paciente paciente3 = new Paciente("Rosa", "Gomes", "97808", "2022/12/5", endereco3);

        clinicaService.salvar(paciente);
        assertTrue(paciente.getId()!=null);
        clinicaService.salvar(paciente2);
        assertTrue(paciente2.getId()!=null);
        clinicaService.salvar(paciente3);
        assertTrue(paciente3.getId()!=null);



        clinicaService.excluir(paciente3.getId());
        clinicaService.buscar(paciente3.getId());


    }
}
