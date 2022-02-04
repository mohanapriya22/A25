import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { JavascriptComponent } from './technologies/javascript/javascript.component';
import { TypescriptComponent } from './technologies/typescript/typescript.component';
import { AngularComponent } from './technologies/angular/angular.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SingupComponent } from './singup/singup.component';
import {HttpClientModule} from '@angular/common/http';
import { SquarePipe } from './square.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    TechnologiesComponent,
    JavascriptComponent,
    TypescriptComponent,
    AngularComponent,
    PagenotfoundComponent,
    FooterComponent,
    SigninComponent,
    SingupComponent,
    SquarePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
