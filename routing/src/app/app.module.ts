import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {  RouterModule, Routes } from '@angular/router';

const routers:Routes=[
  { path : '',component: HomeComponent  },
  { path: 'users',component: UserComponent},
  { path: 'admins', component: AdminComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
