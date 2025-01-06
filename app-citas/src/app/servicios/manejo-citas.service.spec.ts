import { TestBed } from '@angular/core/testing';

import { ManejoCitasService } from './manejo-citas.service';

describe('ManejoCitasService', () => {
  let service: ManejoCitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejoCitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
