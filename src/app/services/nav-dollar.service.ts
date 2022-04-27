import { Injectable } from '@angular/core';
import { interval, Observable, map, of, mergeWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavDollarService {

  navDollar!: number;
  navDollarIntervalObs$: Observable<number> = interval(3000).pipe(
    map(
      () => 
      (this.navDollar = Math.floor(
        this.navDollar + (Math.random() * 100 - 50)
      ))
    )
  );
  navDollarObs$: Observable<number> = of(
    Math.floor(Math.random() * (8000 - 7000) + 7000)
  ).pipe(
    map((value) => (this.navDollar = value)),
    mergeWith(this.navDollarIntervalObs$)
  );

  getNavDollar(): Observable<number> {
    return this.navDollarObs$;
  }

}
