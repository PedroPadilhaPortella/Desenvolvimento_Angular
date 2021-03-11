import { Injectable } from "@angular/core";
import {CanActivate, CanDeactivate, CanLoad } from "@angular/router";
import { CadastroComponent } from "../demos/reactiveForms/cadastro.component";

@Injectable()
export class CadastroGuard implements CanDeactivate<CadastroComponent> {

    canDeactivate(component: CadastroComponent) {
        if(component.mudancasNaoSalvas) {
            return window.confirm("Tem certeza que deseja abandonar o preenchimento do fomulário?")
        }

        return true;
    }

}