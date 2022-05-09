import { EmprestimoResponse } from './../models/emprestimo/EmprestimoResponse';
import { API_PATH } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { EmprestimoForm } from '../models/emprestimo/EmprestimoForm';
import { FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {




  constructor(private http : HttpClient ) {}


  buscarTodos() {
    return this.http.get<EmprestimoResponse[]>(`${API_PATH}emprestimo`);
  }

  cadastrar(emprestimo : EmprestimoForm) {
    console.log(emprestimo);
    return this.http.post<EmprestimoForm>(`${API_PATH}emprestimo`, emprestimo);
  }

  simularEmprestimo(form: FormGroup) {
    console.log(form.value);

  }

}
