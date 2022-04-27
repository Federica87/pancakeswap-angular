import { Injectable } from '@angular/core';
import { interval, Observable, map, of, mergeWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeValueService {

  cakeValue!: number;
  cakeValueIntervalObs$: Observable<number> = interval(3000).pipe(
    map(
      () => 
      (this.cakeValue = Math.floor(
        this.cakeValue + (Math.random() * 100 -50)
      ))
    )
  );
  cakeValueObs$: Observable<number> = of(
    Math.floor(Math.random() * (8000 - 7000) + 7000)
  ).pipe(
    map((value) => (this.cakeValue = value)),
    mergeWith(this.cakeValueIntervalObs$)
  );

  getCakeValue(): Observable<number> {
    return this.cakeValueObs$;
  }
}
