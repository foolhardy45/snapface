import { SnapType } from "./snap-type.type";

export class FaceSnap {
    location?: string;
    id: number;
    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdAt: Date,
                public snaps: number) {
                    this.id = Math.floor(Math.random() * 1000);
                }
    addSnap(): void {
        this.snaps++;
    }
    
    removeSnap(): void {
        this.snaps--;
    }
    setLocation(location: string): void {
        this.location = location;
    }
    whitLocation(Location : string): FaceSnap {
        this.location = Location;
        return this;
    }
    snap(snapType: SnapType) {
        if (snapType === 'snap') {
          this.addSnap();
        } else if (snapType === 'unsnap') {
          this.removeSnap();
        }
    }
}

    