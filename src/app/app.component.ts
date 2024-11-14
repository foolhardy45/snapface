import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './core/components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { interval, of } from 'rxjs';
import { take, map, concatMap, mergeMap, delay, exhaustMap, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
 
 

  ngOnInit() {
    
  }

  

}
