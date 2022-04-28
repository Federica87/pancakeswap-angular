import { BehaviorSubject, tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

private themeSubject = new BehaviorSubject<boolean>(false);
public theme$ = this.themeSubject.asObservable();

private _isDarkModeEnabled = false;
private isDarkModeEnabled$ = new BehaviorSubject<boolean>(this._isDarkModeEnabled);

toggleDarkMode() {
  this._isDarkModeEnabled = !this._isDarkModeEnabled;
  this.isDarkModeEnabled$.next(this._isDarkModeEnabled);
}

isDarkModeEnabled() {
  return this.isDarkModeEnabled$.asObservable().pipe(
    tap(isDarkModeEnabled => {
      if(isDarkModeEnabled) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })
  )
}

 switchTheme() {
    if(this.theme$) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }


constructor() { }
}
