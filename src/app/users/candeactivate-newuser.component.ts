import { Router, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NewUserComponent } from "./newuser.component";
import { Injectable } from '@angular/core';

@Injectable()
export class CanDeactivateTeam implements CanDeactivate<NewUserComponent> {
    canDeactivate(component: NewUserComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (component.form.dirty) {
            return confirm("Are you sure?");
        }
    }


}