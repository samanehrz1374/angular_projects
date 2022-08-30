import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EdituserComponent } from './edituser/edituser.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';
import { AdminComponent } from './admin/admin.component';
import { NotAuthenticatedComponent } from './not-authenticated/not-authenticated.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EdituserComponent,
    NotfoundComponent,
    UserComponent,
    UsersComponent,
    AdminComponent,
    NotAuthenticatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
