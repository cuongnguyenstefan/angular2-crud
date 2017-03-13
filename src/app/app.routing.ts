import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./notfound.component";

export const routing = RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent}
])