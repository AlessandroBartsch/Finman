import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-novo-emprestimo',
  templateUrl: './novo-emprestimo.component.html',
  styleUrls: ['./novo-emprestimo.component.scss']
})
export class NovoEmprestimoComponent implements OnInit {


  emprestimoFormGroup : FormGroup;

  inputValorDoJuros: number;
  inputValorTotalFinal: number;
  inputValorDaParcela: number;

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.configurarFormBuilder();
  }

  cadastrarEmprestimo() {
    console.log(this.emprestimoFormGroup.value);
  }

  simularEmprestimo() {
    const valorEmprestadoVar = this.emprestimoFormGroup.value.valorEmprestado;
    const porcentagemVar = this.emprestimoFormGroup.value.porcentagemJurosPorMes;
    const numeroDeParcelasVar = this.emprestimoFormGroup.value.quantidadeDeParcelas;

    this.inputValorDoJuros = (valorEmprestadoVar * (porcentagemVar/100));
    this.inputValorTotalFinal = (this.inputValorDoJuros + valorEmprestadoVar);

    this.inputValorDaParcela = (this.inputValorTotalFinal / numeroDeParcelasVar);
  }



  configurarFormBuilder() {
    this.emprestimoFormGroup = this.formBuilder.group({
      clienteId: [null, null],
      codigo: [null, null],
      porcentagemJurosPorMes: [null, null],
      quantidadeDeParcelas: [null, null],
      valorParcela: [null, null],
      valorEmprestado: [null, null],
      valorDoJuros: [null, null],
      valorTotalFinal: [null, null],
    })
  }
}
