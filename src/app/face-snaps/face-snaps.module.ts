import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from '../face-snaps/components/face-snap/face-snap.component';
import { FaceSnapListComponent } from '../face-snaps/components/face-snap-list/face-snap-list.component';
import { SingleFaceSnapComponent } from '../face-snaps/components/single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from '../face-snaps/components/new-face-snap/new-face-snap.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaceSnapsRoutingModule } from './face-snaps-routing.module';



@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule
  ],
  exports: [
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent
  ]
})
export class FaceSnapsModule { }
