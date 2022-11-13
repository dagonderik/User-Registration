import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';
import { User } from 'src/app/user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './addEditUsers.component.html',
  styleUrls: ['./addEditUsers.component.css'],
})
export class AddEditUsersComponent implements OnInit {
  user: User | undefined;

  userForm = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id !== 0) {
      this.userService.getUser(id).subscribe((user) => (this.user = user));
    }
  }

  save(): void {
    const user: User = {
      id: this.user?.id,
      name: this.getValueOrEmptyString(this.userForm.get('name')?.value),
      email: this.getValueOrEmptyString(this.userForm.get('email')?.value),
    };
    if (user) {
      this.userService.editUser(user).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

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
