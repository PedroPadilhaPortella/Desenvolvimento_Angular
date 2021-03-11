import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'produto-count',
  template:
  `
    <div>
        <h3>
            Produtos Ativos: {{ contadorAtivos() }} no total de {{ produtos.length }} produtos <br><br>
        </h3>
    </div>
  `
})
export class ProdutoCountComponent {
    @Input() produtos : Produto[];

    contadorAtivos(): number {
        if(!this.produtos) return;

        return this.produtos.filter((produto: Produto) => produto.ativo).length;
    }
}
