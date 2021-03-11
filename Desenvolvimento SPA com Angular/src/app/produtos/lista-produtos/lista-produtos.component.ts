import { Component, OnInit } from "@angular/core";
import { Produto } from "../produto";
import { ProdutosService } from "../produtos.service";

@Component({
    selector: "app-lista-produtos",
    templateUrl: "./lista-produtos.component.html",
})
export class ListaProdutosComponent implements OnInit {
    public produtos: Produto[];
    constructor(private produtoService: ProdutosService) { }

    ngOnInit(): void {
        this.produtoService.obterProdutos()
            .subscribe(
                produtos =>this.produtos = produtos,
                error => console.error(error)
            );
    }
}
