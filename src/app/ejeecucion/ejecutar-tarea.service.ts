import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjecutarTareaService {

  constructor() { }
  ejecutarTareaDespuesDeUnTiempo(tarea: CallableFunction, tiempoEnMilisegundos: number = 1000): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          tarea();
          resolve();
        } catch (error) {
          reject(error);
        }
      }, tiempoEnMilisegundos);
    });
  }
}
