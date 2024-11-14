import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { DatePipe, NgClass, NgStyle, UpperCasePipe,AsyncPipe,NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'single-app-face-snap',
  standalone: true,
  imports: [NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute) {}
  

  ngOnInit() {
    
    
    this.prepareInterface();
    this.getFaceSnap();
    
  }

  private prepareInterface(){
    this.userHasSnapped = false;
    this.snapButtonText = 'Oh Snap!';
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  

  onSnap(faceSnapId: number ): void {
    if (this.userHasSnapped) {
      this.unSnap(faceSnapId);
    } else {
      this.snap(faceSnapId);
    }
  }

  unSnap(faceSnapId: number) {
    this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
      tap(() => {
        this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
        this.snapButtonText = 'Oh Snap!';
        this.userHasSnapped = false;
      })
    ).subscribe();
   
  }
  
  snap(faceSnapId: number) {
    this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
      tap(() => {
        this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
        this.snapButtonText = 'Oops, unSnap!';
        this.userHasSnapped = true;
      })
    ).subscribe();
    
  }
}

