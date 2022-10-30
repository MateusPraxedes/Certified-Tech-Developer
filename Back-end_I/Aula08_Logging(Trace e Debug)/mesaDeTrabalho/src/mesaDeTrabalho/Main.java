package mesaDeTrabalho;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;

public class Main {

    private static final Logger logger = Logger.getLogger(Main.class);

    public static void main(String[] args) throws Exception {


       BasicConfigurator.configure();
     Lista list= new Lista();

        list.comprimentoDaLista();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);
        list.comprimentoDaLista();
        Lista list1 = new Lista();

        list1.add(1);
        list1.add(2);
        list1.add(3);
        list1.add(4);
        list1.add(5);
        list1.add(6);
        list1.add(7);
        list1.add(8);
        list1.add(9);
        list1.add(10);
        list1.add(11);
        list1.comprimentoDaLista();

        Lista list3 = new Lista();
        list3.comprimentoDaLista();

        try {
            list3.comprimentoDaLista();
        }catch (Exception e){
           logger.error("A lista esta vazia");
        }



    }
}
