import { Component } from '@angular/core';
import { Nav } from './nav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

    nav: Nav[] = [
        {
            link: '/home',
            name: 'Home',
            exact: true,
            admin: false
        },
        {
            link: '/cadastro',
            name: 'Cadastro',
            exact: true,
            admin: false
        },
        {
            link: '/sobre',
            name: 'Sobre',
            exact: true,
            admin: false
        },
        {
            link: '/rxjs',
            name: 'RxJs',
            exact: true,
            admin: false
        },
        {
            link: '/produtos/todos',
            name: 'Produtos',
            exact: false,
            admin: false
        },
        {
            link: '/filmes',
            name: 'Filmes',
            exact: true,
            admin: false
        },
        {
            link: '/bar',
            name: 'Bar',
            exact: true,
            admin: false
        },
        {
            link: '/to_do',
            name: 'To Do',
            exact: true,
            admin: false
        },
        {
            link: '/admin',
            name: 'Admin',
            exact: false,
            admin: true
        },
        {
            link: '/contador',
            name: 'Contador',
            exact: true,
            admin: false
        },
    ]
}
