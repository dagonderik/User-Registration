import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerCommunicationLogComponent } from './server-communication-log.component';

describe('ServerCommunicationLogComponent', () => {
  let component: ServerCommunicationLogComponent;
  let fixture: ComponentFixture<ServerCommunicationLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerCommunicationLogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServerCommunicationLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
