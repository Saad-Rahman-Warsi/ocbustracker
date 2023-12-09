import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [{path: 'view',component:ViewComponent},
{path:'register' ,component: RegisterComponent},
{path:'landing' ,component: LandingComponent},
{path:'',redirectTo: 'landing', pathMatch:"full"},
{path: '**',component: ViewComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
