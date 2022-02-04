import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { SingupComponent } from './singup/singup.component';
import { AngularComponent } from './technologies/angular/angular.component';
import { JavascriptComponent } from './technologies/javascript/javascript.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TypescriptComponent } from './technologies/typescript/typescript.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'technologies',component:TechnologiesComponent,children:[
    {path:'javascript',component:JavascriptComponent},
    {path:'typescript',component:TypescriptComponent},
    {path:'angular',component:AngularComponent}
  ]},
  {path:'signup',component:SingupComponent},
  {path:'signin',component:SigninComponent},
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
