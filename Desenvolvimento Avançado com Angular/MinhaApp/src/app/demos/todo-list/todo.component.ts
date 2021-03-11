import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {
    tarefaForm: FormGroup;
    tarefa: Task;
  
    constructor(private fb: FormBuilder, private taskService: TaskService) {}
  
    adicionarTarefa() {
      if (this.tarefaForm.dirty && this.tarefaForm.valid) {
        this.tarefa = Object.assign({}, this.tarefa, this.tarefaForm.value);
        
        this.taskService.adicionar(this.tarefa);
        this.tarefaForm.reset();
      }
    }
    
    ngOnInit() {
      this.tarefaForm = this.fb.group({
        nome: [''],      
      });
    }

}
