import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirstSectionComponent } from './homepage/sections/first-section/first-section.component';
import { BunnyComponent } from './homepage/animations/bunny/bunny.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstSectionComponent,
    BunnyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
