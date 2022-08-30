import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { EdituserComponent } from './edituser/edituser.component';
import { HomeComponent } from './home/home.component';
import { NotAuthenticatedComponent } from './not-authenticated/not-authenticated.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'user/:id',component:UserComponent},
  {path:'user/:id/edit',component:EdituserComponent},
  {path:'not-found',component:NotfoundComponent},
  {path:'not-authenticated',component:NotAuthenticatedComponent},
  {path:'admin',component:AdminComponent, canActivate:[AuthGuard] },
  {path:'**',redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
