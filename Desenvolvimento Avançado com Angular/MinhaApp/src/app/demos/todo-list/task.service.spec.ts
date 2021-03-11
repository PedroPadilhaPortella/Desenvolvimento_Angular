import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { Observable, Observer } from "rxjs";
import { Task } from "./task";
import { TaskService } from "./task.service";
import { Store } from "./todo.store";

const todolist: Task[] = [{ "id": 1, "nome": "Responder e-mails", "finalizado": true, "iniciado": false }];

function createResponse(body) {
    return Observable.create((observer: Observer<any>) => {
        observer.next(body);
    });
}

class MockHttp {
    get() {
        return createResponse(todolist);
    }
}

describe('TasksService', () => {

    let service: TaskService;
    let http: HttpClient;

    beforeEach(() => {
        const bed = TestBed.configureTestingModule({
            providers: [
                { provide: HttpClient, useClass: MockHttp },
                TaskService,
                Store
            ]
        });
        http = bed.get(HttpClient);
        service = bed.get(TaskService);
    });

    it('Deve retornar lista de tarefas', () => {
        //spyOn(http, 'get').and.returnValue(createResponse(todolist));

        service.getTodoList$
            .subscribe((result) => {
                expect(result.length).toBe(1);
                console.log(result);
                console.log(todolist);

                expect(result).toEqual(todolist);
            });
    });

});