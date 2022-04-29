import { EmprestimoModule } from './../emprestimo/emprestimo.module';
import { ClienteModule } from './../cliente/cliente.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    ClienteModule,
    EmprestimoModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
