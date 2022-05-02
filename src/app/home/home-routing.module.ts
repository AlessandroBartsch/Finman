import { HomeEmprestimoComponent } from './../emprestimo/homeEmprestimo/homeEmprestimo.component';
import { ConsultarEmprestimoComponent } from './../emprestimo/consultar-emprestimo/consultar-emprestimo.component';
import { NovoEmprestimoComponent } from './../emprestimo/novo-emprestimo/novo-emprestimo.component';
import { ConsultarClienteComponent } from './../cliente/consultar-cliente/consultar-cliente.component';
import { NovoClienteComponent } from './../cliente/novo-cliente/novo-cliente.component';
import { EmprestimoComponent } from './../emprestimo/emprestimo.component';
import { ClienteComponent } from './../cliente/cliente.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component : HomeComponent, children: [
    {path: 'cliente', component : ClienteComponent, children: [
      {path: 'cadastro', component : NovoClienteComponent},
      {path: 'consulta', component : ConsultarClienteComponent},
    ]},
    {
      path: 'emprestimo', component : EmprestimoComponent, children: [
        {path: '', component: HomeEmprestimoComponent},
        {path: 'cadastro', component : NovoEmprestimoComponent},
        {path: 'consulta', component : ConsultarEmprestimoComponent},
      ]
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
