import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Task } from './task';
import { Store } from './todo.store';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    url = 'http://localhost:3000/todolist';

    constructor(private http: HttpClient, private store: Store) { }

    getTodoList$: Observable<Task[]> = this.http.get<Task[]>(this.url)
        .pipe(tap(next => this.store.set('todolist', next)));

    // getTodoList(): Observable<Task[]> {
    //     return this.http.get<Task[]>(this.url);
    // }

    toggle(event: any) {
        this.http.put(`${this.url}/${event.task.id}`, event.task)
            .subscribe(() => {
                const value = this.store.value.todolist

                const todolist = value.map((task: Task) => {
                    if (event.task.id === task.id) {
                        return { ...task, ...event.task }
                    } else {
                        return task;
                    }
                });

                this.store.set('tofolist', todolist);
            });
    }

    adicionar(task: Task) {
        this.http.post(this.url, task)
            .subscribe(() => {
                const value = this.store.value.todolist;
                task.id = value.slice(-1).pop().id + 1
                task.finalizado = false;
                task.iniciado = false;

                value.push(task);
                this.store.set('todolist', value);
            });
    }

    remover(id: number) {
        this.http
            .delete(`${this.url}/${id}`)
            .subscribe(() => {
                const value = this.store.value.todolist.filter(item => item.id !== id);
                this.store.set('todolist', value);
            });
    }
}