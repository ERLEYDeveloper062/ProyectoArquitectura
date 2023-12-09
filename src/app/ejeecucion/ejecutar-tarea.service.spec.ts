import { TestBed } from '@angular/core/testing';

import { EjecutarTareaService } from './ejecutar-tarea.service';

describe('EjecutarTareaService', () => {
  let service: EjecutarTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjecutarTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
