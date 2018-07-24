import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Component } from '@angular/core/src/metadata/directives';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { Book2Component } from './book2/book2.component';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard/:id', component:BookDetailsComponent},
    // {path:'dashboard/:id',component:Book2Component},
    
  { path:'dashboard',component:DashboardComponent},
  
{path:'**',component:PageNotFoundComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DashboardComponent,SignupComponent,PageNotFoundComponent,HomeComponent, BookDetailsComponent,Book2Component]
