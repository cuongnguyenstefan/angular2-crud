import { Component, OnInit } from '@angular/core';
import { UserService } from "./user.service";
import { Observable } from "rxjs/Observable";


@Component({
    selector: 'users',
    template: `
        <h1>User Page</h1>
        <p>
            <a class="btn btn-primary" [routerLink]="'/users/new'">Add User</a>
        </p>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tr *ngFor="let user of users">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td><span class="glyphicon glyphicon-edit"></span></td>
                <td><span class="glyphicon glyphicon-remove"></span></td>
            </tr>
        </table>
    `,
    providers: [UserService]
})
export class UsersComponent implements OnInit {
    ngOnInit(): void {
        this._userService.getUsers().subscribe(res => this.users = res);
    }


    users;

    constructor(private _userService: UserService) {
        
    }

}