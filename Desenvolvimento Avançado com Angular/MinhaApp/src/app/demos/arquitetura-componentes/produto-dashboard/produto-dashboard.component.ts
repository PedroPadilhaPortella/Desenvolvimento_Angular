import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { ProdutoCardDetalhesComponent } from '../componentes/produto-card-detalhes.component';
import { ProdutoCountComponent } from '../componentes/produto-count.component';
import { Produto } from '../models/produto';

@Component({
    selector: 'app-produto-dashboard',
    templateUrl: './produto-dashboard.component.html',
    styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

    produtos: Produto[];

    // Como capturar elementos html, componentes, uma coleção de elemetos...
    @ViewChild('teste', { static: false }) mensagemTela: ElementRef; //viewchild de elemento dom
    @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent; //viewchild de componente
    @ViewChildren(ProdutoCardDetalhesComponent) cards: QueryList<ProdutoCardDetalhesComponent>;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.produtos = this.route.snapshot.data['produtos'];
        console.log(this.route.snapshot.data['teste'])
    }

    ngAfterViewInit(): void {
        // console.log("Objeto do contador: ", this.contador.produtos);
        // console.log("Produtos Ativos: ", this.contador.contadorAtivos());

        let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click')
        clickTexto.subscribe(() => {
            alert("Clicou no texto")
            return;
        })

        // console.log(this.cards);
        // this.cards.forEach(p => console.log(p.produto));
    }

    mudarStatus(event: Produto) {
        event.ativo = !event.ativo;
    }

}
