import { Injectable } from '@angular/core';
import { Farms } from '../models/Farms';
import { farmCrypto } from 'src/app/mockup/farmsData';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pools } from '../models/Pools';
import { poolsCrypto } from '../mockup/poolsData';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  private farmsSubject = new BehaviorSubject<Farms[]>([...farmCrypto]);
  private farms$ = this.farmsSubject.asObservable()

  getFarms(): Observable<Farms[]> {
    return this.farms$;
  }

  private poolsSubject = new BehaviorSubject<Pools[]>([...poolsCrypto]);
  private pools$ = this.poolsSubject.asObservable()

  getPools(): Observable<Pools[]> {
    return this.pools$;
  }

  sort(value: string, componentType: string): void {
    if (value === 'APR') {
      if (componentType === 'farms') {
        this.farmsSubject.next([...farmCrypto].sort((a, b) => b.apr - a.apr));
      }
      else if (componentType === 'pools') {
        this.poolsSubject.next([...poolsCrypto].sort((a, b) => b.apr - a.apr));
      }
    }
    else if (value === 'Multiplier') {
      this.farmsSubject.next([...farmCrypto].sort((a, b) => b.multiplier - a.multiplier));
    }
    else if (value === 'Liquidity') {
      this.farmsSubject.next([...farmCrypto].sort((a, b) => b.liquidity - a.liquidity));
    }
    else if (value === 'Total Staked') {
      this.poolsSubject.next([...poolsCrypto].sort((a, b) => b.total- a.total));
    }
    else {
      if (componentType === 'farms') {
        this.farmsSubject.next([...farmCrypto]);
      }
      else if (componentType === 'pools') {
        this.poolsSubject.next([...poolsCrypto]);
      }
    }
    console.log(componentType); 
  }
  
  search(value: string, componentType: string): void {
    if (componentType === 'farms') {
      this.farmsSubject.next([...farmCrypto].filter(test => test.name.includes(value)))
    }
    else if (componentType === 'pools') {
      this.poolsSubject.next([...poolsCrypto].filter(test => test.name.includes(value)))
    }
  }

}
