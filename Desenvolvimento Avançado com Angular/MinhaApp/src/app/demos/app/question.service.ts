import { Injectable }       from '@angular/core';
import { QuestionBase } from '../dinamicForms/model/question-base';
import { DropdownQuestion } from '../dinamicForms/model/question-dropdown';
import { TextboxQuestion } from '../dinamicForms/model/question-textbox';


@Injectable()
export class QuestionService {

  getQuestions() {
    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'nome',
        label: 'Nome',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'sobrenome',
        label: 'Sobrenome',
        value: '',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'instagram',
        label: 'Instagram',
        required: true,
        order: 4
      }),

      new TextboxQuestion({
        key: 'senha',
        label: 'Senha',
        type: 'password',
        required: true,
        order: 5
      }),

      new DropdownQuestion({
        key: 'tipo',
        label: 'Tipo de Contato',
        options: [
          {key: '01',  value: 'Cliente'},
          {key: '02',  value: 'Fornecedor'},
          {key: '03',   value: 'Família'},
          {key: '04', value: 'Amigo'}
        ],
        order: 6
      })

    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
