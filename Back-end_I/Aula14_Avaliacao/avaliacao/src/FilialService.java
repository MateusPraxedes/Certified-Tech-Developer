import java.sql.SQLException;

public class FilialService {

    private IDao<Filial> filialIDao;

    public FilialService (IDao<Filial> filialIDao){
        this.filialIDao = filialIDao;
    }

    public Filial salvar(Filial filial) throws SQLException {
        return filialIDao.salvar(filial);
    }


    public void buscarTodos() throws SQLException {
        filialIDao.buscarTodos();
    }
}
