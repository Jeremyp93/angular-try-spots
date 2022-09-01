import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SPOTS } from './mock-spots';
import { Spot } from './spot';

@Injectable({
  providedIn: 'root'
})
export class SpotService {

  constructor() { }

  getSpots = (): Observable<Spot[]> => {
    const spots = of(SPOTS);
    return spots;
  }
}
