import { EmprestimoService } from './../../services/emprestimo.service';
import { Observable } from 'rxjs';
import { ClienteService } from './../../services/cliente.service';
import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TipoEmprestimo } from 'src/app/models/emprestimo/TipoEmprestimo.enum';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-novo-emprestimo',
  templateUrl: './novo-emprestimo.component.html',
  styleUrls: ['./novo-emprestimo.component.scss']
})
export class NovoEmprestimoComponent implements OnInit {


  form : FormGroup;
  clientes : Observable<Cliente[]>;
  clienteSelecionado : String;
  tiposDeEmprestimo = ["DIARIO", "SEMANAL", "MENSAL"];
  isTipoMensal = false;

  inputValorDoJuros: number;
  inputValorTotalFinal: number;
  inputValorDaParcela: number;
  inputValorDasParcelas: number[];

  toppings: FormGroup;


  constructor(private formBuilder : FormBuilder,
     private clienteService : ClienteService,
     private emprestimoService : EmprestimoService,
     private snackBar: MatSnackBar) {
       this.clientes = clienteService.buscarTodos();
     }

  ngOnInit(): void { this.configurarFormBuilder();}







  cadastrarEmprestimo() {
    console.log(this.form.value);

    this.emprestimoService.cadastrar(this.form.value).subscribe(
      response => console.log(response),
      error => {
          this.snackBar.open("ERRO " + error.status + ":", "OK");
      });
  }





  simularEmprestimo() {

    /*Tentando fazer funcionar somente com este*/
    this.emprestimoService.simularEmprestimo(this.form);

    /*hoje a logica esta aqui somnete no front*/
    if (this.form.value.tipoDeEmprestimo == "MENSAL") {
      this.isTipoMensal = true;
      this.inputValorDasParcelas = [];
      this.inputValorTotalFinal = 0;
      this.inputValorDoJuros = 0;

      const porcentagem = this.form.value.porcentagemDoJuros / 100;
      const quantidadeParcelas = this.form.value.quantidadeDeParcelas;
      const valorTotalEmprestado = this.form.value.valorEmprestado;
      const valorDeCadaParcela = valorTotalEmprestado / quantidadeParcelas;
      const valorDaPorcentagem = valorDeCadaParcela * porcentagem;

      console.log("valorDeCadaParcela: " + valorDeCadaParcela);
      console.log("valorDaPorcentagem: " + valorDaPorcentagem);

      for(let i:number = 0; i<quantidadeParcelas; i++){
        const valor = valorDeCadaParcela + (valorDaPorcentagem * (quantidadeParcelas - i));
        console.log("valorDaPorcentagem * (quantidadeParcelas - i): " + valorDaPorcentagem * (quantidadeParcelas - i));
        this.inputValorDasParcelas.push(valor);
        this.inputValorTotalFinal =  this.inputValorTotalFinal + valor;
      }

      this.inputValorDoJuros = (this.inputValorTotalFinal - valorTotalEmprestado);

    } else {
      this.isTipoMensal = false;
      this.inputValorDoJuros = (this.form.value.valorEmprestado * (this.form.value.porcentagemDoJuros/100));
      this.inputValorTotalFinal = (this.inputValorDoJuros + this.form.value.valorEmprestado);
      this.inputValorDaParcela = (this.inputValorTotalFinal / this.form.value.quantidadeDeParcelas);
      console.log(this.form.value);
    }
  }





  configurarFormBuilder() {
    this.form = this.formBuilder.group({
      clienteId: [null, null],
      tipoDeEmprestimo: [null, null],
      dataPrimeiraParcela: [null, null],
      porcentagemDoJuros: [null, null],
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
