import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { BlogComponent } from './blogPage/blog/blog.component';
import { HomeComponent } from './home/home/home.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  // { path: '', component: UserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, data: { animation: 'isRight'} },
  { path: 'blog', component: BlogComponent, data: { animation: 'isLeft' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
