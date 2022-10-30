package com.dh.ClinicaOdontologica.Dao;

import com.dh.ClinicaOdontologica.ConfiguracaoJDBC;
import com.dh.ClinicaOdontologica.modal.Usuario;
import org.springframework.web.bind.annotation.GetMapping;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class UsuarioDaoH2 implements IDao<Usuario>{

    private ConfiguracaoJDBC configuracaoJDBC;

    public UsuarioDaoH2(ConfiguracaoJDBC configuracaoJDBC) {
        this.configuracaoJDBC = configuracaoJDBC;
    }

    @Override
    public Usuario cadastrar(Usuario usuario) {

        Connection connection = configuracaoJDBC.getConnection();
        Statement statement = null;

        String query = String.format("INSERT INTO USUARIOS(NOME,EMAIL,SENHA,NIVEL_ACESSO)" +
                "VALUES('%s','%s','%s','%s')", usuario.getNome(), usuario.getEmail(), usuario.getSenha(), usuario.getNivelAcesso());

        try{

            statement = connection.createStatement();
            statement.executeUpdate(query, Statement.RETURN_GENERATED_KEYS); // Pega automaticamente a chave primaria; Por conta do AUTO_INCREMENT
            ResultSet keys = statement.getGeneratedKeys(); // Pegando as chaves criadas.

            if(keys.next()){
                usuario.setId(keys.getInt(1));
                statement.close();
                connection.close();
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return usuario;
    }

    @Override
    public Usuario buscar(int id) {

        Connection connection = configuracaoJDBC.getConnection();
        Statement statement = null;

        String query = String.format("SELECT ID,NOME,EMAIL,SENHA,NIVEL_ACESSO FROM USUARIOS WHERE ID = " + id);

        Usuario usuario = null;

        try {

            statement = connection.createStatement();
            ResultSet rs = statement.executeQuery(query);

            while (rs.next()){
                usuario = new Usuario(rs.getInt("ID"),rs.getString("NOME"),rs.getString("EMAIL"),rs.getString("SENHA"),
                        rs.getString("NIVEL_ACESSO"));
            }

            statement.close();

        } catch (SQLException throwables){
            throwables.printStackTrace();
        }


        return usuario;
    }

    @Override
    public void deletar(int id) {
        Connection connection = configuracaoJDBC.getConnection();
        Statement statement = null;

        String query = String.format("DELETE FROM USUARIOS WHERE ID = " + id);

        try {

            statement = connection.createStatement();
            statement.execute(query);
            statement.close();

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

}
