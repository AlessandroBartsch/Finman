import { Endereco } from './Endereco';
export interface Cliente {

  id : String;
  nome : String;
  cpf : String;
  telefone : String;
  conhecidoDo : String;

  endereco : Endereco;
}
