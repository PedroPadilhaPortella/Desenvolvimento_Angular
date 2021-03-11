import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskService } from '../../task.service';
import { Store } from '../../todo.store';


@Component({
    selector: 'tasks-finalizadas',
    templateUrl: './tasks-finalizadas.component.html'
})
export class TasksFinalizadasComponent implements OnInit {

    finalizados$: Observable<any[]>;

    constructor(private taskService: TaskService, private store: Store) { }

    ngOnInit() {
        this.finalizados$ = this.store.getTodoList()
            .pipe(map(todolist => todolist.filter(task => !task.iniciado && task.finalizado)))
    }

    onToggle(event: any) {
        this.taskService.toggle(event);
    }
}