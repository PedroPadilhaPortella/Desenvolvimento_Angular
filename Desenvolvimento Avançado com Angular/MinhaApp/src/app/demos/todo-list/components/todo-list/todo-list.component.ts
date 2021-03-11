import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../task';
import { TaskService } from '../../task.service';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})
export class ToDoListComponent {

    @Input() list: Task[];
    @Output() toggle = new EventEmitter<any>();

    constructor(private taskService: TaskService) {}

    toggleItem(index: number, action: string) {
        const task = this.list[index];
        
        switch(action) {
            case 'iniciar':
                task.finalizado = false;
                task.iniciado = true;
                break;
            case 'finalizar':
                task.finalizado = true;
                task.iniciado = false;
                break;
            case 'retomar':
                task.finalizado = false;
                task.iniciado = true;
                break;
            case 'cancelar':
                task.finalizado = false;
                task.iniciado = false;
                break;
        }

        this.toggle.emit({
            task: { ...task }
        });
    }

    excluir(id: number){
        this.taskService.remover(id);
    }
}