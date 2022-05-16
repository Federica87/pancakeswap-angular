import { Injectable } from '@angular/core';
import { Farms } from '../models/Farms';
import { farmCrypto } from 'src/app/mockup/farmsData';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  private farmsSubject = new BehaviorSubject<Farms[]>([...farmCrypto]);
  private farms$ = this.farmsSubject.asObservable()

  constructor() { }

  getFarms(): Observable<Farms[]> {
    return this.farms$;
  }

  sort(value: string): void {
    if (value === 'APR') {
      this.farmsSubject.next([...farmCrypto].sort((a, b) => b.apr - a.apr));
    }
    else if (value === 'Multiplier') {
      this.farmsSubject.next([...farmCrypto].sort((a, b) => b.multiplier - a.multiplier));
    }
    else if (value === 'Liquidity') {
      this.farmsSubject.next([...farmCrypto].sort((a, b) => b.liquidity - a.liquidity));
    }
    else {
      this.farmsSubject.next([...farmCrypto]);
    }
    
  }

  search(value: string): void {
    this.farmsSubject.next([...farmCrypto].filter(test => test.name.includes(value)))
  }
}
