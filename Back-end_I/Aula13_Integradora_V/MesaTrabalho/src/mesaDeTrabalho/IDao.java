package mesaDeTrabalho;

import java.sql.SQLException;

public interface IDao <T>{

    public T cadastrar(T t) throws SQLException;
    public T buscar(Integer id) throws SQLException;
    public void excluir(Integer id) throws SQLException;

}
