package mesaDeTrabalho;

import java.util.HashMap;
import java.util.Map;

public class ArvoreFactory {

    private  static Map<String, Arvore> arvoreFlywight = new HashMap<>();
    public Arvore plantar(String categoria){
        if (!arvoreFlywight.containsKey(categoria)){
            arvoreFlywight.put(categoria,new Arvore(categoria));
            System.out.println("\nArvore plantada do tipo: " + categoria );
            return arvoreFlywight.get(categoria);
        }
        System.out.println("\nArvore plantada");
        return arvoreFlywight.get(categoria);

    }
}
