import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, NgZone, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarService, BebidaService } from './bar.service';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    providers: [
        { provide: BarService, useClass: BarService },
        { 
            provide: BarService, 
            useFactory: BarFactory,
            deps: [
                HttpClient,
                //BAR_UNIDADE_CONFIG
                Injector
            ]
        },
        { provide: BebidaService, useExisting: BarService }
    ]
})
export class BarComponent implements OnInit {

    barBebida1: string;
    barBebida2: string;
    barRefeicao1: string;
    barPorcao1: string;
    configManual: BarUnidadeConfig;
    configAuto: BarUnidadeConfig;
    dadosUnidade: string;

    constructor (
        private barService: BarService,
        @Inject('ConfigManual') private apiConfigManual: BarUnidadeConfig,
        @Inject(BAR_UNIDADE_CONFIG) private apiConfigAuto: BarUnidadeConfig,
        private bebidaService: BebidaService,
        private ngZone: NgZone
    ) { }

    ngOnInit() {
        this.barBebida1 = this.barService.obterBebidas();
        this.barPorcao1 = this.barService.obterPorcoes();
        this.barRefeicao1 = this.barService.obterRefeicoes();
        
        this.configManual = this.apiConfigManual;
        this.configAuto = this.apiConfigAuto;
        this.dadosUnidade = this.barService.obterUnidade();

        this.barBebida2 = this.bebidaService.obterBebidas();
    }

    public progress: number = 0;
    public label: string;

    progressWithinAngularZone() {
        this.label = "dentro";
        this.progress = 0;
        this._increaseProgress(() => console.log("Finalizado por dentro!"))
    }

    progressOutsideAngularZone() {
        this.label = "dentro";
        this.progress = 0;
        this.ngZone.runOutsideAngular(() => {
            this._increaseProgress(() => {
                this.ngZone.run(() => { console.log("Finalizado por dentro!") })
            })
        });
    }

    _increaseProgress(doneCallback: () => void) {
        this.progress += 1;
        console.log(`Progresso Atual: ${this.progress}%`);
        if(this.progress < 100) {
            window.setTimeout(() => this._increaseProgress(doneCallback), 10);
        } else {
            doneCallback();
        }
    }

}
