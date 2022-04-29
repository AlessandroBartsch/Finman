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

@NgModule({
  declarations: [
    EmprestimoComponent,
    NovoEmprestimoComponent,
    ConsultarEmprestimoComponent,
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
  ],
  exports: [EmprestimoComponent],
})
export class EmprestimoModule {}
