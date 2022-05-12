export class EmprestimoResponse {

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

  constructor(id, estaEmDia, nomeCliente, tipoDoEmprestimo, quantidadeDeParcelas,
    dataDaPrimeiraParcela, dataDaUltimaParcela, valorEmprestado, valorEmJuros, valorTotal) {
      this.id = id;
      this.estaEmDia = estaEmDia;
      this.nomeCliente = nomeCliente;
      this.tipoDoEmprestimo = tipoDoEmprestimo;
      this.quantidadeDeParcelas = quantidadeDeParcelas;
      this.dataDaPrimeiraParcela = dataDaPrimeiraParcela;
      this.dataDaUltimaParcela = dataDaUltimaParcela;
      this.valorEmprestado = valorEmprestado;
      this.valorEmJuros = valorEmJuros;
      this.valorTotal = valorTotal;
  }

}
