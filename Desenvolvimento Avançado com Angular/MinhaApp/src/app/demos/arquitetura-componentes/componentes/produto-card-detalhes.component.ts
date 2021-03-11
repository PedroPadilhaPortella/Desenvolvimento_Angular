import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
    selector: 'produto-card-detalhes',
    templateUrl: './produto-card-detalhes.component.html',
    styles: []
})
export class ProdutoCardDetalhesComponent {

    @Input() produto: Produto;
    @Output() status: EventEmitter<any> = new EventEmitter();

    emitirEvento(): void {
        this.status.emit(this.produto);
    }
}