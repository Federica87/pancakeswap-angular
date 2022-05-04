import { Injectable } from '@angular/core';
import { Stat } from '../models/Stats';
import { cakeStatsMockup } from '../mockup/statsData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeStatsService {

  constructor( private httpClient: HttpClient) { }

  private cakeStats: Stat [] = cakeStatsMockup;

  get(): Observable<Stat[]> {
    return this.httpClient.get<Stat[]>('http://localhost:3000/cakeStats');
  }
  
}
