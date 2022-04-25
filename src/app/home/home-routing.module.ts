import { ConsultaComponent } from './../cliente/consulta/consulta.component';
import { CadastroComponent } from './../cliente/cadastro/cadastro.component';
import { EmprestimoComponent } from './../emprestimo/emprestimo.component';
import { ClienteComponent } from './../cliente/cliente.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component : HomeComponent, children: [
    {path: 'cliente', component : ClienteComponent, children: [
      {path: 'cadastro', component : CadastroComponent},
      {path: 'consulta', component : ConsultaComponent},
    ]},
    {
      path: 'emprestimo', component : EmprestimoComponent, children: [

      ]
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
