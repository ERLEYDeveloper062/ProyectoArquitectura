import { Instruccion } from "./instruccion";

export class Memoria {
  celdas: Array<Instruccion> = new Array<Instruccion>();

  agregarInstruccion(instruccion: string) {
    this.celdas.push(new Instruccion(instruccion));
  }

  obtenerInstruccion(direccion: number): Instruccion | undefined {
    if (direccion < 0 || direccion >= this.celdas.length) {
      throw new Error("Dirección de memoria fuera de rango");
    }
    return this.celdas[direccion];
  }

  // Método adicional para actualizar una instrucción
  actualizarInstruccion(direccion: number, nuevaInstruccion: string): void {
    if (direccion < 0 || direccion >= this.celdas.length) {
      throw new Error("Dirección de memoria fuera de rango");
    }
    this.celdas[direccion] = new Instruccion(nuevaInstruccion);
  }

  // Método adicional para limpiar la memoria
  limpiarMemoria(): void {
    this.celdas = [];
  }
}
