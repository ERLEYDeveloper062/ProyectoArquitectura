import { OperacionInstruccion } from "../Enumeraciones/operacion-instruccion";
import { VariableInstruccion } from "../Enumeraciones/variable-instruccion";

export class Instruccion {
  operacion: OperacionInstruccion | undefined;
  operando1: number | VariableInstruccion | undefined;
  operando2: number | VariableInstruccion | undefined;
  operando3: number | VariableInstruccion | undefined;
  textoInstruccion: string;

  private static operacionMap = new Map<string, OperacionInstruccion>([
    ["LOAD", OperacionInstruccion.LOAD],
    ["MUL", OperacionInstruccion.MUL],
    ["ADD", OperacionInstruccion.ADD],
    ["SUB", OperacionInstruccion.SUB],
    ["DIV", OperacionInstruccion.DIV],
    ["MOVE", OperacionInstruccion.MOVE],
    // ... otros mapeos
  ]);

  private static variableMap = new Map<string, VariableInstruccion>([
    ["A", VariableInstruccion.A],
    ["B", VariableInstruccion.B],
    ["C", VariableInstruccion.C],
    ["D", VariableInstruccion.D],
    ["E", VariableInstruccion.E],
    ["F", VariableInstruccion.F],
    ["G", VariableInstruccion.G],
    ["H", VariableInstruccion.H],
    // ... otros mapeos
  ]);

  constructor(textoInstruccion: string) {
    this.textoInstruccion = textoInstruccion;
    this.descomponerInstruccion();
  }

  descomponerInstruccion(): void {
    let instruccionArray = this.textoInstruccion.split(" ");
    if (instruccionArray.length >= 4) {
      this.operacion = Instruccion.operacionMap.get(instruccionArray[0].toUpperCase());
      this.operando1 = this.obtenerOperando(instruccionArray[1]);
      this.operando2 = this.obtenerOperando(instruccionArray[2]);
      this.operando3 = this.obtenerOperando(instruccionArray[3]);
    }
  }

  obtenerOperando(operando: string): number | VariableInstruccion | undefined {
    let valor = Instruccion.variableMap.get(operando.toUpperCase());
    return valor !== undefined ? valor : Number(operando);
  }

  toString(): string {
    return this.textoInstruccion;
  }
}
