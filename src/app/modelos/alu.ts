import { OperacionInstruccion } from "../Enumeraciones/operacion-instruccion";

export class ALU {
  operacionAEjecutar: OperacionInstruccion | undefined;
  operando1: number = 0;
  operando2: number = 0;

  ejecutarOperacion(tipoOperacion: OperacionInstruccion, operando1: number, operando2: number): number {
    this.operacionAEjecutar = tipoOperacion;
    this.operando1 = operando1;
    this.operando2 = operando2;
    switch (tipoOperacion) {
      case OperacionInstruccion.ADD:
        return this.add(operando1, operando2);
      case OperacionInstruccion.SUB:
        return this.sub(operando1, operando2);
      case OperacionInstruccion.MUL:
        return this.multiply(operando1, operando2);
      case OperacionInstruccion.DIV:
        return this.divide(operando1, operando2);
      default:
        return 0;
    }
  }

  private add(operando1: number, operando2: number): number {
    return operando1 + operando2;
  }

  private sub(operando1: number, operando2: number): number {
    return operando1 - operando2;
  }

  private multiply(operando1: number, operando2: number): number {
    return operando1 * operando2;
  }

  private divide(operando1: number, operando2: number): number {
    if (operando2 === 0) {
      return 0
    }
    return operando1 / operando2;
  }
}
