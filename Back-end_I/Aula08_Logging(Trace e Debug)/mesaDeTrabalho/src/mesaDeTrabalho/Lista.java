package mesaDeTrabalho;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

public class Lista {

    private static final Logger logger = Logger.getLogger(Lista.class);
    private List<Integer> listaInteiros = new ArrayList<>();


    public void add(int inteiro){
        listaInteiros.add(inteiro);
    }

    public void listaMedia(){

        int soma = 0;
        for (int i=0; i< listaInteiros.size(); i++) {
            soma += i;
        }
        int media =  soma / listaInteiros.size();
        logger.info("A media da lista: "+ media);

    }

    public void comprimentoDaLista() throws Exception{
        if (listaInteiros.size() > 5 && listaInteiros.size() <= 10){
            logger.info("O comprimento da lista é maior que 5");
        }
        if (listaInteiros.size() > 10){
            logger.info("O comprimento da lista é maior que 10");
        }
        if (listaInteiros.size() == 0){
            logger.error("A lista é igual a zero");
            throw new Exception();
        }
    }

//    public int maximoEMinimo(List<Integer> listaInteiro){
//        Integer min = Integer.MAX_VALUE;
//
//        for (Integer i: listaInteiro)
//        {
//            if (min > i) {
//                min = i;
//            }
//        }
//        return min;
//    }



}
