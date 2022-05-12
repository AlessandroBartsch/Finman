import { EmprestimoResponse } from './../../models/emprestimo/EmprestimoResponse';
import { EmprestimoService } from './../../services/emprestimo.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-consultar-emprestimo',
  templateUrl: './consultar-emprestimo.component.html',
  styleUrls: ['./consultar-emprestimo.component.scss']
})


export class ConsultarEmprestimoComponent {

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
    `valorTotal`,
    `actionIcons`
  ];
  dataSource: MatTableDataSource<EmprestimoResponse>;
  actionIcons: String;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  constructor(private emprestimoService : EmprestimoService) {
    const emprestimoResponse = emprestimoService.buscarTodos();

    emprestimoResponse.subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.actionIcons = 'input';
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
