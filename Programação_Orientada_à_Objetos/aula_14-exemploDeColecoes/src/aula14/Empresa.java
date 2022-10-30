package aula14;

import java.util.ArrayList;
import java.util.List;

public class Empresa {
    private String cnpj;

    private List<Empregado> empregados = new ArrayList<>();

    public Empresa(String cnpj) {
        this.cnpj = cnpj;
    }

    public void adicionarEmpregado (Empregado empregado){

        empregados.add(empregado);

    }


    public int quantEmpregados()

    {

        return empregados.size();

    }


    public String getCnpj() {

        return cnpj;

    }


    public void setCnpj(String cnpj) {

        this.cnpj = cnpj;

    }
}
