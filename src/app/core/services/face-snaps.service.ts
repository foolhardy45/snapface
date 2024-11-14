import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';
import { Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  
  constructor(private http: HttpClient) {}
  
  private faceSnaps: FaceSnap[] = [
        new FaceSnap(
          'Archibald',
          'Mon meilleur ami depuis toujours !',
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          new Date(),
          10
        ),
        new FaceSnap(
          'Three Rock Mountain',
          'Un endroit magnifique pour les randonnées.',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          new Date(),
          6
        ).whitLocation('Three Rock Mountain, Dublin, Ireland'),
        new FaceSnap(
          'Un bon repas',
          'Mmmh que c\'est bon !',
          'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          new Date(),
          156
        )
    ];
      
  
  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/faceSnaps/${faceSnapId}`);
  }


  snapFaceSnapById(faceSnapId: number, snapType: SnapType): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      
       map(faceSnap => ({
          ...faceSnap,
          snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
       })),
       tap(updatedFaceSnap => console.log('Before PUT:', updatedFaceSnap)),  // Vérifie l'objet mis à jour
       switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
          `http://localhost:3000/faceSnaps/${faceSnapId}`,
          updatedFaceSnap
       )),
       tap(response => console.log('After PUT:', response))  // Vérifie la réponse de l’API
    );
    
 }
 

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/faceSnaps');
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
   return this.getAllFaceSnaps().pipe(
    map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
    map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
    map(previousFaceSnap => ({
      ...formValue,
      snaps: 0,
      createdAt: new Date(),
      id: previousFaceSnap.id + 1
  })),
  switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/faceSnaps', newFaceSnap))
  );
}
 
}