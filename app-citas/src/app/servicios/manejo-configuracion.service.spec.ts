import { TestBed } from '@angular/core/testing';

import { ManejoConfiguracionService } from './manejo-configuracion.service';

describe('ManejoConfiguracionService', () => {
  let service: ManejoConfiguracionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejoConfiguracionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
