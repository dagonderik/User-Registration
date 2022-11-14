import { Component, NgModule, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-users',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  delete(user: User): void {
    this.users = this.users.filter((u) => u !== user);
    user.id
      ? this.userService.deleteUser(user.id).subscribe()
      : this.userService.deleteUser('').subscribe();
  }
}
