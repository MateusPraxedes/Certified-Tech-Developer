package mesaDeTrabalho;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Logger;

public class ClinicaDaoH2 implements IDao<Paciente>{

    private ConfiguracaoJDBC configuracaoJDBC;

    final static Logger log = Logger.getLogger(String.valueOf(ClinicaDaoH2.class));

    public ClinicaDaoH2(ConfiguracaoJDBC configuracaoJDBC) {
        this.configuracaoJDBC = configuracaoJDBC;
    }

    @Override
    public Paciente cadastrar(Paciente paciente) {

        log.info("Registrando um novo Paciente: " + paciente.toString());
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        String query = String.format("INSERT INTO pacientes(nome,sobrenome,rg,dataDeCadastro) values ('%s','%s','%s','%s')",
                paciente.getNome(),paciente.getSobrenome(),paciente.getRg(),paciente.getDataDeCadastro());

        try{
            statement = connection.createStatement();
            statement.executeUpdate(query,Statement.RETURN_GENERATED_KEYS);
            ResultSet keys = statement.getGeneratedKeys();

            if(keys.next()){
                paciente.setId(keys.getInt(1));
                paciente.getEndereco().setIdPaciente(keys.getInt(1));
                String queryEndereco = String.format("INSERT INTO endereco (rua, numero, cidade, bairro, idPaciente) " +
                                "VALUES ('%s', %d, '%s', '%s', %d)",
                        paciente.getEndereco().getRua(), paciente.getEndereco().getNumero(), paciente.getEndereco().getBairro(), paciente.getEndereco().getCidade(),
                        paciente.getId());

                statement.execute(queryEndereco, Statement.RETURN_GENERATED_KEYS);
                ResultSet keysEnd = statement.getGeneratedKeys();

                if (keysEnd.next()) {
                    paciente.getEndereco().setId(keysEnd.getInt(1));
                }
                statement.close();
                connection.close();


            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return paciente;
    }

    @Override
    public Paciente buscar(Integer id) throws SQLException {
        log.info("Buscando Paciente com id: "+id);
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        Endereco endereco = null;
        Paciente paciente = null;

        String query = "SELECT p.id, p.nome, p.sobrenome, p.RG, p.datadecadastro, e.id idEnd, e.rua, e.numero, e.cidade, e.bairro FROM pacientes p " +
                " JOIN endereco e on e.idPaciente = p.id" +
                " WHERE p.id = " + id;

        statement = connection.createStatement();
        ResultSet rs = statement.executeQuery(query);

        if(rs.next()){
            System.out.println(rs.getString(2) + " " + rs.getString(3) + " " + rs.getString(4) + " " +
                    rs.getString(5) + " " + rs.getInt(8) + " " + rs.getString(9) + " " + rs.getString(10));
            endereco = new Endereco(rs.getInt(6), rs.getString(7), rs.getInt(8), rs.getString(9), rs.getString(10), rs.getInt(1));
            paciente = new Paciente(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), endereco);

        }

        statement.close();
        connection.close();

        return paciente;
    }

    @Override
    public void excluir(Integer id) throws SQLException{
        log.info("Excluindo o paciente de id " + id);
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;

        String queryEndereco = "DELETE FROM endereco WHERE idPaciente = " + id;
        String queryPaciente = "DELETE FROM pacientes WHERE id = " + id;

        statement = connection.createStatement();
        try {
            connection.setAutoCommit(false);
            statement.execute(queryEndereco);
            statement.execute(queryPaciente);
            connection.commit();
            connection.setAutoCommit(true);
        } catch (SQLException e){
            e.printStackTrace();
            connection.rollback();
        }

        statement.close();
        connection.close();
    }
}
