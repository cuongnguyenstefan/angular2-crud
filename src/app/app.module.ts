import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './navbar/navBar.component'
import { routing } from './app.routing'
import { usersRouting } from './users/users.routing'
import { postsRouting } from './posts/posts.routing'
import { PostsComponent } from "./posts/posts.component";
import { UsersComponent } from "./users/users.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./notfound.component";
import { RouterLinkActive, RouterModule } from "@angular/router"
import { NewUserComponent } from "./users/newuser.component";
import { CanDeactivateTeam } from './users/candeactivate-newuser.component'

@NgModule({
  declarations: [
    AppComponent, NavComponent, UsersComponent, PostsComponent, HomeComponent, NotFoundComponent, NewUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    usersRouting,
    postsRouting,
    routing
  ],
  providers: [CanDeactivateTeam],
  bootstrap: [AppComponent],
})
export class AppModule { }
