import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

private themeSwitch = new BehaviorSubject<boolean>(false);
public theme$ = this.themeSwitch.asObservable();

  switchTheme() {
    if(this.theme$) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  constructor() { }
}
