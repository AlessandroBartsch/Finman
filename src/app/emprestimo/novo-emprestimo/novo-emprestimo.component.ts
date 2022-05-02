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

  toppings: FormGroup;


  constructor(private formBuilder : FormBuilder,
     private clienteService : ClienteService,
     private emprestimoService : EmprestimoService) {
       this.clientes = clienteService.buscarTodos();
     }

  ngOnInit(): void { this.configurarFormBuilder();}







  cadastrarEmprestimo() {
    console.log(this.emprestimoFormGroup.value);
  }

  simularEmprestimo() {

    this.emprestimoService.simularEmprestimo(this.emprestimoFormGroup);

    if (this.emprestimoFormGroup.value.tipoDeEmprestimo == "MENSAL") {
      this.isTipoMensal = true;
      this.inputValorDasParcelas = [];
      this.inputValorTotalFinal = 0;
      this.inputValorDoJuros = 0;

      const porcentagem = this.emprestimoFormGroup.value.porcentagemJurosPorMes / 100;
      const quantidadeParcelas = this.emprestimoFormGroup.value.quantidadeDeParcelas;
      const valorTotalEmprestado = this.emprestimoFormGroup.value.valorEmprestado;
      const valorDeCadaParcela = valorTotalEmprestado / quantidadeParcelas;
      const valorDaPorcentagem = valorDeCadaParcela * porcentagem;

      for(let i:number = 0; i<quantidadeParcelas; i++){
        const valor = valorDeCadaParcela + (valorDaPorcentagem * (quantidadeParcelas - i));
        this.inputValorDasParcelas.push(valor);
        this.inputValorTotalFinal =  this.inputValorTotalFinal + valor;
      }

      this.inputValorDoJuros = (this.inputValorTotalFinal - valorTotalEmprestado);

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
      descricao: [null, null],

      valorDoJuros: [null, null],
      valorTotalFinal: [null, null],

      segunda: [false, null],
      terca: [false, null],
      quarta: [false, null],
      quinta: [false, null],
      sexta: [false, null],
      sabado: [false, null],
      domingo: [false, null]
    })
  }
}
