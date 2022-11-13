import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditUsersComponent } from './components/addEditUsers/addEditUsers.component';
import { UsersComponent } from './components/usersList/usersList.component';
import { UserService } from './services/user.service';
import { ServerCommunicationLogService } from './services/serverCommunicationLog.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ServerCommunicationLogComponent } from './components/server-communication-log/server-communication-log.component';

@NgModule({
  declarations: [AppComponent, AddEditUsersComponent, UsersComponent, ServerCommunicationLogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UserService, ServerCommunicationLogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
