import { Router, RouterModule } from '@angular/router';
import { UsersComponent } from "./users.component";
import { NewUserComponent } from "./newuser.component";
import { CanDeactivateTeam } from "./candeactivate-newuser.component";

export const usersRouting = RouterModule.forRoot([
    { path: 'users', component: UsersComponent },
    { path: 'users/new', component: NewUserComponent, canDeactivate: [CanDeactivateTeam] }

])