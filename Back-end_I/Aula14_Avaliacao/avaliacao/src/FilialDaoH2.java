import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;

import java.sql.*;


public class FilialDaoH2 implements IDao<Filial> {


    private ConfiguracaoJDBC configuracaoJDBC;
    final static Logger log = Logger.getLogger(String.valueOf(FilialDaoH2.class));

    public FilialDaoH2(ConfiguracaoJDBC configuracaoJDBC){
        BasicConfigurator.configure();
        this.configuracaoJDBC = configuracaoJDBC;
    }

    @Override
    public Filial salvar(Filial filial) throws SQLException {
        log.info("Gravando a filial " + filial.toString());
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        PreparedStatement pStatement = null;

        String query = String.format("INSERT INTO filial (nome, rua, numero, cidade, estado, cincoEstrelas) " +
                        "VALUES (?, ?, ?, ?, ?, ?)");
                //                "VALUES ('%s', '%s', %d, '%s', '%s', '%s', '%s')",
        //        filial.getNomeFilial(), filial.getRua(), filial.getNumero(), filial.getCidade(), filial.getEstado(), filial.isCincoEstrelas());

        try {
            pStatement = connection.prepareStatement(query, PreparedStatement.RETURN_GENERATED_KEYS);
            pStatement.setString(1, filial.getNomeFilial());
            pStatement.setString(2, filial.getRua());
            pStatement.setInt(3, filial.getNumero());
            pStatement.setString(4, filial.getCidade());
            pStatement.setString(5, filial.getEstado());
            pStatement.setBoolean(6, filial.isCincoEstrelas());
            pStatement.execute();
            ResultSet keys = pStatement.getGeneratedKeys();;

            if(keys.next()){
                filial.setId(keys.getInt(1));
            }
            log.info("Filial gravada: " + filial.toString());
            pStatement.close();
            connection.close();

        } catch (SQLException e){
            log.error("Erro encontrado ao excluir: " + e.toString());
            e.printStackTrace();
        }

        return filial;
    }

    @Override
    public void buscarTodos() throws SQLException {
        log.info("Buscando todas as filiais: ");
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;

        String query = "SELECT f.id, f.nome, f.rua, f.numero, f.cidade, f.estado, f.cincoEstrelas FROM filial f ";

        statement = connection.createStatement();
        ResultSet rs = statement.executeQuery(query);

        while(rs.next()){
            System.out.println("Id: " + rs.getInt(1) + " Nome filial: " + rs.getString(2) + " Rua: " + rs.getString(3) + " Número: " +
                    rs.getInt(4) + " Cidade: " + rs.getString(5) + " Estado: " + rs.getString(6) + " É 5 Estrelas?: " + rs.getString(7));
        }

        statement.close();
        connection.close();
    }
}
