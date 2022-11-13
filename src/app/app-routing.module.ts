import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditUsersComponent } from './components/addEditUsers/addEditUsers.component';
import { UsersComponent } from './components/usersList/usersList.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'register', component: AddEditUsersComponent },
  { path: 'edit/:id', component: AddEditUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
