import { Component } from '@angular/core';
import { QuestionService } from './services/question.service';

@Component({
    selector: 'app-root',
    templateUrl: 'form.component.html',
    providers: [QuestionService]
})
export class FormComponent {
    questions: any[];

    constructor(service: QuestionService) {
        this.questions = service.getQuestions();
    }
}
