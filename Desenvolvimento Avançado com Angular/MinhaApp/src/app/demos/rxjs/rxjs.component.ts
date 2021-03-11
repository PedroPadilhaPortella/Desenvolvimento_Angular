import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-rxjs',
    template: ''
})
export class RxjsComponent implements OnInit {

    title = 'RXJS';

    ngOnInit(): void {
        /*this.minhaPromise('pedro')
            .then(result => console.log(result))
            .catch(error => console.log(error))*/

        /* this.minhaPromise('carlos')
            .then(result => console.log(result))
            .catch(error => console.log(error))*/

        /*this.minhaObservable('pedro')
            .subscribe(
                result => console.log(result),
                erro => console.log(erro)
            )*/

        const observer = {
            next: valor => console.log('Next: ', valor),
            error: error => console.log("Erro: ", error),
            complete: () => console.log("Processo concluído.")
        }

        const obs = this.minhaObservable('pedro');
        obs.subscribe(observer);
    }

    minhaPromise(nome: string): Promise<string> {
        return new Promise((resolve, reject) => {
            if (nome == 'pedro') {
                setTimeout(() => {
                    resolve('Seja bem vindo ' + nome);
                }, 1000);
            } else {
                reject('Ops, não é o Pedro.')
            }
        })
    }

    minhaObservable(nome: string): Observable<string> {
        return new Observable(subscriber => {
            if (nome == 'pedro') {
                subscriber.next("Bem vindo Pedro")
            } else {
                subscriber.error("Ops, deu erro ")
            }
            subscriber.complete()
        })
    }

}
