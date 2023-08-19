import { TestBed } from '@angular/core/testing';

import { BackendapiserviceService } from './backendapiservice.service';

describe('BackendapiserviceService', () => {
  let service: BackendapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
