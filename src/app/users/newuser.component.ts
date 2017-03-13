import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserValidators } from "./userValidator";
import { UserService } from "./user.service";



@Component({
    moduleId: module.id,
    selector: 'add-user',
    template: `
        <h1>Add New User</h1>
        <div class="row">
            <div class="col-md-6 col-lg-6 well">
                <form [formGroup]="form" (ngSubmit)="add()">
                    <fieldset formGroupName="user">
                        <legend>User</legend>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" class="form-control" formControlName="name">
                            <div class="alert alert-danger" *ngIf="form.controls.user.controls.name.errors && (form.controls.user.controls.name.dirty || form.controls.user.controls.name.touched)">
                                <div [hidden]="!form.controls.user.controls.name.errors.required">
                                    Name is required
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" id="email" class="form-control" formControlName="email">
                            <div class="alert alert-danger" *ngIf="form.controls.user.controls.email.errors && (form.controls.user.controls.email.dirty || form.controls.user.controls.email.touched)">
                                <div [hidden]="!form.controls.user.controls.email.errors.notValidEmail">
                                    Please enter a valid email
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="text" id="phone" class="form-control" formControlName="phone">
                        </div>
                    </fieldset>
                    <fieldset formGroupName="address">
                        <legend>Address</legend>
                        <div class="form-group">
                            <label for="street">Street</label>
                            <input type="text" id="street" class="form-control" formControlName="street">
                        </div>
                        <div class="form-group">
                            <label for="suite">Suite</label>
                            <input type="text" id="suite" class="form-control" formControlName="suite">
                        </div>
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text" id="city" class="form-control" formControlName="city">
                        </div>
                        <div class="form-group">
                            <label for="zipcode">Zip Code</label>
                            <input type="text" id="zipcode" class="form-control" formControlName="zipcode">
                        </div>
                    </fieldset>
                    <button class="btn btn-primary" type="submit" [disabled]="!form.valid">Save</button>
                </form>
            </div>
        </div>
    `,
    providers: [UserService]
})
export class NewUserComponent {
   
   form: FormGroup;

   constructor(private fb: FormBuilder, private _router: Router, private _userService: UserService) {
       this.setForm();
   }

   private setForm() {
       this.form = this.fb.group({
           user: this.fb.group({
            name: ['', Validators.required],
            email: ['', UserValidators.validEmail],
            phone: ['', ]
           }),
           address: this.fb.group({
            street: ['', ],
            suite: ['', ],
            city: ['', ],
            zipcode: ['', ]
           })
       });
   }

   add() {
       console.log(this.form.value);
       console.log(this._userService.postUser(this.form.value));
       this._router.navigate(['users']);
   }

}