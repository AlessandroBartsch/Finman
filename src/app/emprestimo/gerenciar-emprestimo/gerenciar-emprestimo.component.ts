import { MatTableDataSource } from '@angular/material/table';
import { EmprestimoService } from './../../services/emprestimo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

export interface Endereco {
  id: number;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento: string;
}

export interface Parcela{
  id: number;
  emprestimoId: number;
  dataPagamento: Date;
  dataInclusaoDoPagamento: Date;
  valor: number;
  pago: number;
}

export interface Cliente {
  id: number;
  endereco: Endereco;
  nome: string;
  cpf: string;
  telefone: string;
  conhecidoDo: string;
  ativo: boolean;
}

export interface Emprestimo {

  id: number;
  cliente: Cliente;
  tipoEmprestimo: string;
  valorEmprestado: number;
  porcentagemDosJuros: number;
  quantidadeDeParcelas: number;
  dataPrimeiraParcela: Date;
  dataDeCriacao: Date;
  diasDaSemanaQueSeraPagoAsParcelas: string[];
  parcelas: Parcela[];
  valorEmJuros: number;
  valorTotal: number;
}

@Component({
  selector: 'app-gerenciar-emprestimo',
  templateUrl: './gerenciar-emprestimo.component.html',
  styleUrls: ['./gerenciar-emprestimo.component.scss']
})
export class GerenciarEmprestimoComponent implements OnInit {

  displayedColumns: string[] = [
    `id`,
    `dataVencimento`,
    `valor`,
    'pago'
  ];

  id: number;
  inscricao : Subscription;

  parcelas: MatTableDataSource<Parcela>;
  emprestimos: MatTableDataSource<Emprestimo>;
  parcela: Parcela[] = [];

  constructor(private route: ActivatedRoute, private emprestimoService: EmprestimoService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params : any) => {
        this.id = params['id'];
    });

    this.emprestimoService.buscarEmprestimos().subscribe(
      response => {
        this.emprestimos = new MatTableDataSource(response);
        this.parcelas = new MatTableDataSource(response[0].parcelas);
        this.parcela = response[0].parcelas;

        console.log(this.parcelas);
        console.log(this.parcela);
        console.log(this.emprestimos.data.values)
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
