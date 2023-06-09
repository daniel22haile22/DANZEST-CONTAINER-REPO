import { NgModule } from '@angular/core';
import { ExampleLibComponent } from './example-lib.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ExampleLibComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    ExampleLibComponent
  ],
  // Inject any services created under this library
providers: []
})
export class ExampleLibModule { }
