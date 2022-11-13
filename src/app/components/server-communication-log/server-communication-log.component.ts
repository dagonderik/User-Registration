import { Component, OnInit } from '@angular/core';
import { ServerCommunicationLogService } from 'src/app/services/serverCommunicationLog.service';

@Component({
  selector: 'app-server-communication-log',
  templateUrl: './server-communication-log.component.html',
  styleUrls: ['./server-communication-log.component.css'],
})
export class ServerCommunicationLogComponent implements OnInit {
  constructor(public messageService: ServerCommunicationLogService) {}

  ngOnInit(): void {}
}
