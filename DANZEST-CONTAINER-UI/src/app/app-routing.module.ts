import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxDanzestModule } from 'projects/ngx-danzest/src/public-api';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgxDanzestModule
],
  exports: [RouterModule],
})
export class AppRoutingModule {}
