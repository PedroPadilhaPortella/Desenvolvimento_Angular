import { Component, OnChanges, OnInit } from '@angular/core';
import { LocalStorageUtils } from 'src/app/utils/localstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnChanges {

    isLogged: boolean;
    private localStorageUtils = new LocalStorageUtils();
    
    ngOnInit(): void {
        this.isLogged = this.localStorageUtils.obterUsuario() == null ?  true : false
    }
    
    ngOnChanges() {
        this.isLogged = this.localStorageUtils.obterUsuario() == null ?  true : false
    }


}
