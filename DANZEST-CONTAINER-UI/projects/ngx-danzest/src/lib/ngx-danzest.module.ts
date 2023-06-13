import { NgModule } from '@angular/core';
import { NgxDanzestComponent } from './ngx-danzest.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-pages/landing-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
]

@NgModule({
  declarations: [
    NgxDanzestComponent,
    SignupComponent,
    LoginComponent,
    LandingPageComponent,
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [NgxDanzestComponent],

  // Inject any services created under this library
  providers: [],
})
export class NgxDanzestModule {}
