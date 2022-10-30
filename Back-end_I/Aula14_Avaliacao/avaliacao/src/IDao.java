
import java.sql.SQLException;

public interface IDao <T> {

    public T salvar(T t) throws SQLException;

    public void buscarTodos() throws SQLException;

}
