import { HomeEmprestimoComponent } from './homeEmprestimo/homeEmprestimo.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

import { EmprestimoRoutingModule } from './emprestimo-routing.module';
import { EmprestimoComponent } from './emprestimo.component';
import { NovoEmprestimoComponent } from './novo-emprestimo/novo-emprestimo.component';
import { ConsultarEmprestimoComponent } from './consultar-emprestimo/consultar-emprestimo.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    EmprestimoComponent,
    NovoEmprestimoComponent,
    ConsultarEmprestimoComponent,
    HomeEmprestimoComponent,
  ],
  imports: [
    CommonModule,
    EmprestimoRoutingModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,

  ],
  exports: [EmprestimoComponent],
})
export class EmprestimoModule {}
