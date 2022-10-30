package MesaDeTrabalho;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FuguraTest {

    Circulo c1;
    Quadrado q1;

    @BeforeEach
    void doBefore(){

     c1 = new Circulo(23.0);
     q1 = new Quadrado(10);
    }

    @Test
    void verificarPerimetro(){
        System.out.println(c1.calcularPerimetro());
        assertEquals(47, q1.calcularPerimetro());
   }


}






