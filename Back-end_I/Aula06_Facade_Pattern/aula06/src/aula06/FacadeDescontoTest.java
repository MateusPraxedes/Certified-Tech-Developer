package aula06;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FacadeDescontoTest {

    private FacadeDesconto facadeDesconto = new FacadeDesconto();
    private Cartao cartao;
    private Produto produto;

    @BeforeEach

    void doBefore(){
        cartao = new Cartao("123456787887","Star Bank");
        produto = new Produto("ervilhas", "lata");
    }

    @Test
    void validarDescontoBancoTest(){
        produto.setTipo("enlatado");

        int desconto = facadeDesconto.desconto(cartao, produto, 1);
       assertEquals(20,desconto);

    }
    @Test
    void validarDescontoProdutoTest(){
        cartao.setBanco("Oto Banco");

        int desconto = facadeDesconto.desconto(cartao,produto,1);
        assertEquals(10,desconto);
    }

    @Test
    void validarDescontoQuantidade(){
        produto.setTipo("enlatado");
        cartao.setBanco("Oto Banco");

        int desconto = facadeDesconto.desconto(cartao,produto,12);
    }

    @Test

    void validarDescontoTotalTest(){

    int desconto =facadeDesconto.desconto(cartao,produto,12);
    assertEquals(45,desconto);
    }



}
