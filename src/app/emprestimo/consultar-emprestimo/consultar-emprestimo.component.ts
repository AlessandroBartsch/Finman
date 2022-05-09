import { Observable } from 'rxjs';
import { EmprestimoService } from './../../services/emprestimo.service';
import { EmprestimoResponse } from './../../models/emprestimo/EmprestimoResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-emprestimo',
  templateUrl: './consultar-emprestimo.component.html',
  styleUrls: ['./consultar-emprestimo.component.scss']
})


export class ConsultarEmprestimoComponent implements OnInit {

  emprestimos: Observable<EmprestimoResponse[]>;

  constructor(private emprestimoService: EmprestimoService) {
    this.emprestimos = this.emprestimoService.buscarTodos();
  }

  ngOnInit(): void {
    console.log("oniiiintiti");
    this.emprestimos = this.emprestimoService.buscarTodos();
  }


  displayedColumns: string[] = [
    `id`,
    `estaEmDia`,
    `nomeCliente`,
    `tipoDoEmprestimo`,
    `quantidadeDeParcelas`,
    `dataDaPrimeiraParcela`,
    `dataDaUltimaParcela`,
    `valorEmprestado`,
    `valorEmJuros`,
    `valorTotal`
  ];

}
