package Exercicio_Guiado;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;

public class Main {

    private static final Logger logger = Logger.getLogger(Main.class);

    public static void main(String[] args) throws Exception {

        // alternativa para configuarar o log4j.properties

        BasicConfigurator.configure();

        Leao leao = new Leao("Simba", 8,true);
        leao.correr();
        leao.eMaiorQue10();

        try {
            leao.eMaiorQue10();
        }
        catch (Exception e){
            logger.error("A idade do leao " + leao.getNome() + " esta incorreta");
        }




    }
}
