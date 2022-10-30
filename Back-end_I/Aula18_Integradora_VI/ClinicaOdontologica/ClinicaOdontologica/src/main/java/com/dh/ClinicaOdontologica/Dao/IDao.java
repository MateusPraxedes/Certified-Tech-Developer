package com.dh.ClinicaOdontologica.Dao;

public interface IDao<T> {

    public T cadastrar(T t);
    public T buscar(int id);
    public void deletar(int id);

}
