import { EmprestimoService } from './../../services/emprestimo.service';
import { Observable } from 'rxjs';
import { ClienteService } from './../../services/cliente.service';
import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TipoEmprestimo } from 'src/app/models/enums/TipoEmprestimo.enum';

@Component({
  selector: 'app-novo-emprestimo',
  templateUrl: './novo-emprestimo.component.html',
  styleUrls: ['./novo-emprestimo.component.scss']
})
export class NovoEmprestimoComponent implements OnInit {


  emprestimoFormGroup : FormGroup;
  clientes : Observable<Cliente[]>;
  clienteSelecionado : String;
  tiposDeEmprestimo = ["DIÁRIO", "SEMANAL", "MENSAL"];
  isTipoMensal = false;

  inputValorDoJuros: number;
  inputValorTotalFinal: number;
  inputValorDaParcela: number;
  inputValorDasParcelas: number[];




  constructor(private formBuilder : FormBuilder,
     private clienteService : ClienteService, emprestimoService : EmprestimoService) {
       this.clientes = clienteService.buscarTodos();
     }

  ngOnInit(): void { this.configurarFormBuilder();}







  cadastrarEmprestimo() {
    console.log(this.emprestimoFormGroup.value);
  }



  simularEmprestimo() {


    if (this.emprestimoFormGroup.value.tipoDeEmprestimo == "MENSAL") {
      console.log("MENSAL");

      this.isTipoMensal = true;
      this.inputValorDasParcelas = [];

      const porcentagem = this.emprestimoFormGroup.value.porcentagemJurosPorMes / 100;
      const quantidadeParcelas = this.emprestimoFormGroup.value.quantidadeDeParcelas;
      const valorTotalEmprestado = this.emprestimoFormGroup.value.valorEmprestado;

      const valorDeCadaParcela = valorTotalEmprestado / quantidadeParcelas;
      const valorDaPorcentagem = valorDeCadaParcela * porcentagem;

      console.log(valorDaPorcentagem);

      for(let i:number = 0; i<quantidadeParcelas; i++)
      {
        const valor = valorDeCadaParcela + (valorDaPorcentagem * (quantidadeParcelas - i));
        console.log(valor);
        this.inputValorDasParcelas.push(valor);

      }

    } else {
      this.isTipoMensal = false;

    this.inputValorDoJuros = (this.emprestimoFormGroup.value.valorEmprestado * (this.emprestimoFormGroup.value.porcentagemJurosPorMes/100));
    this.inputValorTotalFinal = (this.inputValorDoJuros + this.emprestimoFormGroup.value.valorEmprestado);
    this.inputValorDaParcela = (this.inputValorTotalFinal / this.emprestimoFormGroup.value.quantidadeDeParcelas);

    }
  }



  configurarFormBuilder() {
    this.emprestimoFormGroup = this.formBuilder.group({
      clienteId: [null, null],
      tipoDeEmprestimo: [null, null],
      dataPrimeiraParcela: [null, null],
      porcentagemJurosPorMes: [null, null],
      quantidadeDeParcelas: [null, null],
      valorParcela: [null, null],
      valorParcelas: [[null, null]],
      valorEmprestado: [null, null],

      valorDoJuros: [null, null],
      valorTotalFinal: [null, null],
    })
  }
}
