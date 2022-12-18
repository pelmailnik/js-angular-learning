import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/services/user.type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  user: User;

  constructor(
    public dialogRef: MatDialogRef<UserComponent>,
    private _fb: FormBuilder,
    private _userService: UserService
    ) {
      this.user = new User();
      this.userForm = this._fb.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        gender: '',
        email: ['',  Validators.pattern('[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}')],
        phone: ['', Validators.pattern('[0-9]{11}')],
        favoriteColor: ''
      });
    }

  ngOnInit(): void {
    this._userService.getUser()
      .subscribe((user: User[]) => {
        this.user = user[0];
        this.userForm.setValue({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          gender: this.user.gender,
          email: this.user.email,
          phone: this.user.phone,
          favoriteColor: this.user.favoriteColor
        });
      });
  }

  isShowMessageRequired(formControlName: string): boolean {
    return !!this.userForm.get(formControlName)?.errors?.required;
  }

  isValidField(formControlName: string): boolean {
    return !!this.userForm.get(formControlName)?.invalid;
  }

  isWrongLength(formControlName: string): boolean {
    const absCont = this.userForm.get(formControlName);

    return !(absCont?.errors?.minLength &&
      absCont?.pristine &&
      absCont?.errors?.required);
  }

  isEmpty(formControlName: string): boolean {
    return !!this.userForm.get(formControlName)?.pristine;
  }

  onCancelClick(): void {
    this.dialogRef.close(this.user);
  }

  onLogInClick(): void {
    this.user = this.userForm.value;
    this._userService.setUser(this.user);
    this.onCancelClick();
  }

}
