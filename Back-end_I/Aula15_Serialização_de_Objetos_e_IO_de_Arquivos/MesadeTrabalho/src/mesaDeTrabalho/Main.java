package mesaDeTrabalho;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Contato> contatos = new ArrayList<>();

        Contato contato1 = new Contato("Mateus","mateuspraxedes@dh.com","119274364");

        Contato contato2 = new Contato("Pedro","pedro@dh.com","345678222");

        contatos.add(contato1);
        contatos.add(contato2);

        FileOutputStream fot = null;

        try {
            fot = new FileOutputStream("outputFile.txt");
            ObjectOutputStream objectOutputStream =new ObjectOutputStream(fot);
            objectOutputStream.writeObject(contatos);

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        List<Contato> contatos2 = null;
        FileInputStream fi = null;

        try {
            fi = new FileInputStream("outputFile.txt");
            ObjectInputStream ois = new ObjectInputStream(fi);

            contatos2 = (ArrayList) ois.readObject();

        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        for (Contato contato: contatos2){
            System.out.println(contato.getNome()+" : "+ contato.getEmail()+" : "+ contato.getTelefone() );
        }

    }
}
