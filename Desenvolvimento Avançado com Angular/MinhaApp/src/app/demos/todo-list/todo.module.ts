import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { ToDoListComponent } from './components/todo-list/todo-list.component';
import { TaskService } from './task.service';
import { Store } from './todo.store';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        TodoComponent,
        TasksComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        ToDoListComponent
    ],
    exports: [
        TodoComponent,
        TasksComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        ToDoListComponent
    ],
    providers: [
        TaskService,
        Store
    ]
})
export class TodoModule { }
