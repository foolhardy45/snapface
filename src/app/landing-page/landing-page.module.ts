import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LandingPageModule
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LandingPageModule
  ]
})
export class LandingPageModule { }
