import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RepoComponent } from './components/repo/repo.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'user', component: UserComponent },
  { path: 'repository', component: RepoComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
