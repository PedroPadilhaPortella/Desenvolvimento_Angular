import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FormComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent
    ],
    exports: [
    ],
})
export class DinamicFormsModule { }
