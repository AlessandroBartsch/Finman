import { ParcelaForm } from './ParcelaForm';

export class EmprestimoForm {

  clienteId: number;
  parcelas: ParcelaForm[];
  codigo: String;
  porcentagemJurosPorMes: number;
  quantidadeDeParcelas: number;
  valorParcela: number;
  valorEmprestado: number;
  valorDoJuros: number;
  valorTotalFinal: number;

}
