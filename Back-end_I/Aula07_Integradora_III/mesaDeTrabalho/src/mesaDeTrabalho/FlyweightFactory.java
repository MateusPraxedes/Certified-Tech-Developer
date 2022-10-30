package mesaDeTrabalho;

import java.util.HashMap;

public class FlyweightFactory {

    public static final HashMap<String, Roupa> listaTamanhoXs = new HashMap<>();
    public static final HashMap<String, Roupa> listaTamanhoS = new HashMap<>();
    public static final HashMap<String, Roupa> listaTamanhoM = new HashMap<>();
    public static final HashMap<String, Roupa> listaRoupasImportadas = new HashMap<>();
    public static final HashMap<String, Roupa> listaRoupasMaCondicoes = new HashMap<>();




    public static Roupa obterRoupa(String tamanho, String tipo, boolean eNovo,boolean importada){

        Roupa xs = listaTamanhoXs.get(tamanho);
        Roupa s = listaTamanhoS.get(tamanho);
        Roupa m = listaTamanhoM.get(tamanho);
        Roupa importada1 = listaRoupasImportadas.get(importada);
        Roupa maCodicoes = listaRoupasMaCondicoes.get(eNovo);



        if (xs == null || tamanho.equalsIgnoreCase("XS") ){
            xs = new Roupa(tamanho, tipo, eNovo, importada);
            listaTamanhoXs.put(tamanho,xs);
        }else {
            return xs;
        }
        if (s == null){
            s = new Roupa(tamanho, tipo, eNovo, importada);
            listaTamanhoS.put(tamanho,s);
        }else {
            return s;
        }

        if (m == null){
            m = new Roupa(tamanho, tipo, eNovo, importada);
            listaTamanhoM.put(tamanho,m);
        }else {
            return m;
        }

        if (importada1 == null){
            importada1 = new Roupa(tamanho, tipo, eNovo, importada);
            listaRoupasImportadas.put(tamanho,importada1);
        }else {
            return importada1;
        }

        if (maCodicoes == null){
            maCodicoes = new Roupa(tamanho, tipo, eNovo, importada);
            listaRoupasMaCondicoes.put(tamanho,maCodicoes);
        } else {
            return maCodicoes;
        }

        return null;

    }



}
