import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgBrazil } from 'ng-brazil'
import { TextMask } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation'

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { CadastroComponent } from './demos/reactiveForms/cadastro.component';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { SobreComponent } from './demos/sobre/sobre.component';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImagePipe } from './demos/pipes/filmes/image.pipe';
import { BarService } from './demos/bar-di-zones/bar.service';
import { TodoModule } from './demos/todo-list/todo.module';
import { RxjsModule } from './demos/rxjs/rxjs.module';
import { ContadorComponent } from './demos/contador/contador.component';

export const BAR_PROVIDERS: Provider[] = [
    BarService
]

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    FilmesComponent,
    CadastroComponent,
    FileSizePipe,
    ImagePipe,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    TextMask.TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TodoModule,
    RxjsModule,
    // DynamicFormModule,
    BarModule.forRoot({ unidadeId: 13, unidadeToken: 'cc4ed67aku32llo945' })
  ],
  providers: [
    // {provide: APP_BASE_HREF, useValue: '/'}
    AuthGuard,
    CadastroGuard,
    // BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
