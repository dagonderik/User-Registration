import { TestBed } from '@angular/core/testing';

import { ServerCommunicationLogService } from './serverCommunicationLog.service';

describe('MessageService', () => {
  let service: ServerCommunicationLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerCommunicationLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
