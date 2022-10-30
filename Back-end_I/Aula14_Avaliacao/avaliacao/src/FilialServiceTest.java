import org.junit.jupiter.api.*;

import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.assertTrue;

class FilialServiceTest {

    FilialService filialService;

    @BeforeEach
    void doBefore(){
        filialService = new FilialService(new FilialDaoH2(new ConfiguracaoJDBC()));
    }

    @Test
    public void guardarFilial() throws SQLException {
        Filial filial1 = new Filial("B Hotel", "Eixão Planalto", 171, "Brasília", "DF", true);
        Filial filial2 = new Filial("Bristol Hotel", "Avenida Ipiranga", 1676, "Rio de Janeiro", "RJ", true);
        Filial filial3 = new Filial("Hotel Sampa", "Rua Marechal Candido Rondon", 200, "São Paulo", "SP", false);
        Filial filial4 = new Filial("JF Hotel", "Avenida Brasil", 80, "Juiz de Fora", "MG", false);
        Filial filial5 = new Filial("Curral Hotel", "Avenida da Pampulha", 101, "Belo Horizonte", "MG", true);


        filialService.salvar(filial1);
        assertTrue(filial1.getId()!=null);
        filialService.salvar(filial2);
        assertTrue(filial2.getId()!=null);
        filialService.salvar(filial3);
        assertTrue(filial3.getId()!=null);
        filialService.salvar(filial4);
        assertTrue(filial4.getId()!=null);
        filialService.salvar(filial5);
        assertTrue(filial5.getId()!=null);

        filialService.buscarTodos();

    }


}