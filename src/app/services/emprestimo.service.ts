import { FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  constructor() { }


  getInputValorDoJuros(valor, juros): number {
    return valor * (juros/100);
  }

  getInputValorTotalFinal(form, valorDoJuros) {
    return (form.value.valorEmprestado + valorDoJuros);
  }

  getInputValorDaParcela(form, valorTotalFinal) {
    return (valorTotalFinal / form.value.quantidadeDeParcelas);
  }

  simularEmprestimo(form: FormGroup) {
    console.log(form.value);

  }

}
