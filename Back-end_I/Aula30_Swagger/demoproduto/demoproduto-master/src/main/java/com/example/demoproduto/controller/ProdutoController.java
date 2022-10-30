package com.example.demoproduto.controller;

import com.example.demoproduto.model.ProdutoModel;
import com.example.demoproduto.service.ProdutoService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    private ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @Operation(summary = "Vamos registrar um novo produto")//colocar uma descrição do post no swagger
    @PostMapping
    public ProdutoModel salvarProduto(@RequestBody ProdutoModel produtoModel){
        return produtoService.salvar(produtoModel);
    }

    @GetMapping
    public List<ProdutoModel> buscarTodos(){
        return produtoService.salvarTodos();
    }

    @GetMapping("/{id}")
    public ProdutoModel buscarProduto(@PathVariable Integer id){
        return produtoService.buscarPorId(id);
    }

    @DeleteMapping("/{id}")
    public String deletarProduto(@PathVariable Integer id){
        produtoService.delete(id);
        return "Produto deletado";
    }

}
