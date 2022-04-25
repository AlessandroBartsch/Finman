import { Observable } from 'rxjs';
import { Cliente } from './../../models/cliente';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { faListSquares } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})


export class ConsultaComponent implements OnInit {

  clientes: Observable<Cliente[]>;

  constructor(private clienteService : ClienteService) {
    this.clientes = this.clienteService.buscarTodos();
  }


  ngOnInit(): void {

  }

}
