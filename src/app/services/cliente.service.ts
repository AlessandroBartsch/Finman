import { API_PATH } from './../../environments/environment';
import { Cliente } from './../models/cliente';
import { ClientePostDTO } from './../models/clientePostDTO';
import { Observable, take } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private httpClient : HttpClient) { }

  buscarTodos() {
    return this.httpClient.get<Cliente[]>(`${API_PATH}cliente`);
  }

  salvar(cliente : ClientePostDTO): Observable<ClientePostDTO> {
    return this.httpClient.post<ClientePostDTO>(`${API_PATH}cliente`, cliente, this.httpOptions);
  }

}
