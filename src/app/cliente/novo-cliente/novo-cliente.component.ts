import { ClientePostDTO } from '../../models/clientePostDTO';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.scss']
})
export class NovoClienteComponent {

  cliente : ClientePostDTO = {
    nome: '',
    cpf: '',
    conhecidoDo: '',
    telefone: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero:'',
    complemento:'',
  }




  constructor(private clienteService : ClienteService) {}

  cadastrar(form : FormsModule) {
    console.log(form);
    console.log(this.cliente);

    this.clienteService.salvar(this.cliente).subscribe(result =>{});
  }
}
