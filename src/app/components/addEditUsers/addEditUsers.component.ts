import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './addEditUsers.component.html',
  styleUrls: ['./addEditUsers.component.css'],
})
export class AddEditUsersComponent implements OnInit {
  userForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public onSubmit(): void {
    const user: User = {
      name: this.getValueOrEmptyString(this.userForm.get('name')?.value),
      email: this.getValueOrEmptyString(this.userForm.get('email')?.value),
    };
    this.userService
      .addUser(user)
      .subscribe(() => window.alert(`user ${user.name} added`));
    this.router.navigateByUrl('/users');
  }

  private getValueOrEmptyString(value: string | undefined): string {
    return value ? value : '';
  }
}
