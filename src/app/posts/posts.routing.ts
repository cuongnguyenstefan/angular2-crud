import { Router, RouterModule } from '@angular/router';
import { PostsComponent } from "./posts.component";

export const postsRouting = RouterModule.forRoot([
    { path: 'posts', component: PostsComponent }
])