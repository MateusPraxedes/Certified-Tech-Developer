package mesaDeTrabalho;

import java.sql.SQLException;

public class ClinicaService {
    private IDao<Paciente> pacienteIDao;

    public ClinicaService (IDao<Paciente> pacienteIDao){
        this.pacienteIDao = pacienteIDao;
    }

    public Paciente salvar(Paciente paciente) throws SQLException {
        return pacienteIDao.cadastrar(paciente);
    }

    public Paciente buscar(Integer id) throws SQLException {
        return pacienteIDao.buscar(id);
    }

    public void excluir(Integer id) throws SQLException {
        pacienteIDao.excluir(id);
    }

}
