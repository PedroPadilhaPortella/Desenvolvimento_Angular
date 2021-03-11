import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';

export function BarFactory(http: HttpClient, /*config: BarUnidadeConfig*/ injector :Injector) {
    return new BarService(http, /*config,*/ injector.get(BAR_UNIDADE_CONFIG));
}

@Injectable({
    providedIn: 'root'
})
export class BarService {

    constructor(
        private http: HttpClient,
        @Inject(BAR_UNIDADE_CONFIG) private config: BarUnidadeConfig
        ) { }

    obterUnidade() {
        return `Unidade Id: ${this.config.unidadeId}, Token: ${this.config.unidadeToken}`;
    }

    obterBebidas() {
        return "Bebidas";
    }

    obterPorcoes() {
        return "Porcoes";
    }

    obterRefeicoes() {
        return "Refeicoes";
    }
}


export class BarServiceMock {
    obterBebidas() {
        return "Mock";
    }

    obterPorcoes() {
        return "Mock";
    }

    obterRefeicoes() {
        return "Mock";
    }
}

export abstract class BebidaService {
    obterBebidas: () => string
}