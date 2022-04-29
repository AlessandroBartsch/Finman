import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';


@NgModule({
  declarations: [
    ClienteComponent,
    NovoClienteComponent,
    ConsultarClienteComponent,
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
