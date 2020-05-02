import { TestBed } from '@angular/core/testing';

import { SubirService } from './subir.service';

describe('SubirService', () => {
  let service: SubirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
