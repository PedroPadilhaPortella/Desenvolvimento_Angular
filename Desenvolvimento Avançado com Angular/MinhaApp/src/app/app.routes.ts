import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './demos/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { BarComponent } from './demos/bar-di-zones/bar.component';
import { TodoComponent } from './demos/todo-list/todo.component';
import { RxjsComponent } from './demos/rxjs/rxjs.component';
import { ContadorComponent } from './demos/contador/contador.component';

const rootRouterConfig: Routes = [
    { 
        path: '',
        redirectTo: '/home', 
        pathMatch: 'full'
    },
    { 
        path: 'home', 
        component: HomeComponent
    },
    { 
        path: 'sobre', 
        component: SobreComponent 
    },
    { 
        path: 'rxjs', 
        component: RxjsComponent 
    },
    { 
        path: 'cadastro', 
        component: CadastroComponent,
        canDeactivate: [CadastroGuard]
    },
    { 
        path: 'cadastro-dinamico', 
        component: CadastroComponent
    },
    { 
        path: 'produtos', 
        loadChildren: () => import('./demos/arquitetura-componentes/produto.module').then(m => m.ProdutoModule)
    },
    {
        path: 'filmes',
        component: FilmesComponent
    },
    {
        path: 'bar',
        component: BarComponent
    },
    {
        path: 'to_do',
        component: TodoComponent
    },
    { 
        path: 'admin', 
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard]
    },
    { 
        path: 'contador', 
        component: ContadorComponent
    },
    { 
        path: '**', 
        component: NotFoundComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(rootRouterConfig,  { enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}