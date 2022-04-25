import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ClienteComponent } from './cliente.component';
import { ConsultaComponent } from './consulta/consulta.component';


@NgModule({
  declarations: [
    CadastroComponent,
    ClienteComponent,
    ConsultaComponent,
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule
  ],
  exports: [
    ClienteComponent
  ]
})
export class ClienteModule { }
