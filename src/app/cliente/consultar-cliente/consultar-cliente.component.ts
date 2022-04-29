import { Observable } from 'rxjs';
import { Cliente } from './../../models/cliente';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.scss']
})
export class ConsultarClienteComponent implements OnInit {

  clientes: Observable<Cliente[]>;

  constructor(private clienteService : ClienteService) {
    this.clientes = this.clienteService.buscarTodos();
  }


  ngOnInit(): void {

  }
}
