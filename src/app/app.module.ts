import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEditUsersComponent } from './components/addEditUsers/addEditUsers.component';
import { UsersComponent } from './components/usersList/usersList.component';
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AddEditUsersComponent, UsersComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [UserService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
