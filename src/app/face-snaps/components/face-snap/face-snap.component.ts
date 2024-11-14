import { Component, OnInit,Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [UpperCasePipe,
    RouterLink,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent  {
  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router) { }
  
  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}

