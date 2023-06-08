import { NgModule } from '@angular/core';
import { NgxDanzestComponent } from './ngx-danzest.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';



@NgModule({
  declarations: [
    NgxDanzestComponent,
    SignupComponent,
    LoginComponent,
    LandingPageComponent
  ],
  imports: [
  ],
  exports: [
    NgxDanzestComponent
  ]
})
export class NgxDanzestModule { }
