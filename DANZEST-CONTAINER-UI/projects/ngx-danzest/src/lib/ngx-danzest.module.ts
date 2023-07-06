import { NgModule } from '@angular/core';
import { NgxDanzestComponent } from './ngx-danzest.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { TermsAndConditionsComponent } from './components/landing-pages/terms-and-conditions/terms-and-conditions.component';
import { OntactUsComponent } from './components/landing-pages/ontact-us/ontact-us.component';
import { HomePageComponent } from './components/landing-pages/home-page/home-page.component';
import { AboutUsComponent } from './components/landing-pages/about-us/about-us.component';
import { DisclaimersComponent } from './components/landing-pages/disclaimers/disclaimers.component';
import { CommonModule } from '@angular/common';
import { HomePageService } from './services/landing-pages-services/home-page-service/home-page.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonTableComponent } from './components/common-table/common-table.component';
import { SignupService } from './services/auth-users-service/signup.service';
const routes: Routes = [
  
]

@NgModule({
  declarations: [
    NgxDanzestComponent,
    SignupComponent,
    LoginComponent,
    TermsAndConditionsComponent,
    OntactUsComponent,
    HomePageComponent,
    AboutUsComponent,
    DisclaimersComponent,
    CommonTableComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [NgxDanzestComponent,
  CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],

  // Inject any services created under this library
  providers: [HomePageService, SignupService],
})
export class NgxDanzestModule {}
