export interface EmprestimoResponse {

  id : number;
  estaEmDia : boolean;
  nomeCliente : String;
  tipoDoEmprestimo : String;
  quantidadeDeParcelas : number;
  dataDaPrimeiraParcela : Date;
  dataDaUltimaParcela : Date;
  valorEmprestado : number;
  valorEmJuros : number;
  valorTotal : number;

}
