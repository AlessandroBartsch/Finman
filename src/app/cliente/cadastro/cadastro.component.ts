import { ClientePostDTO } from './../../models/clientePostDTO';
import { Cliente } from 'src/app/models/cliente';
import { FormsModule } from '@angular/forms';
import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent {

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
