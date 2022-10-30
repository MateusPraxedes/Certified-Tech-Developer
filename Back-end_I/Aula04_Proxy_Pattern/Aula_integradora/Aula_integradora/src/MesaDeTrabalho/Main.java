package MesaDeTrabalho;

public class Main {

    public static void main(String[] args)  {


        Serie Lucifer = new Serie();
        Serie Dark = new Serie();
        ISerie s1 = new SerieProxy(Lucifer);
        ISerie s2 = new SerieProxy(Dark);


        s2.getSerie("Dark");
        s2.getSerie("Dark");
        s2.getSerie("Dark");
        s2.getSerie("Dark");

        s1.getSerie("Lucifer");
        s1.getSerie("Lucifer");
        s1.getSerie("Lucifer");
        s1.getSerie("Lucifer");
        s1.getSerie("Lucifer");
        s1.getSerie("Lucifer");




    }
}
