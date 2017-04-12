import { TestBed, inject } from '@angular/core/testing';

import { LegoService } from './lego.service';

describe('LegoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LegoService]
    });
  });

  it('should ...', inject([LegoService], (service: LegoService) => {
    expect(service).toBeTruthy();
  }));
});
