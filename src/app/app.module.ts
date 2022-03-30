import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirstSectionComponent } from './homepage/sections/first-section/first-section.component';
import { BunnyComponent } from './homepage/animations/bunny/bunny.component';
import { FooterContainerComponent } from './footer/footer-container/footer-container.component';
import { FooterLinkComponent } from './footer/footer-link/footer-link.component';
import { FooterLogoComponent } from './footer/footer-logo/footer-logo.component';
import { FooterSocialComponent } from './footer/footer-social/footer-social.component';
import { NavbarContainerComponent } from './navbar/navbar-container/navbar-container.component';
import { NavbarLeftComponent } from './navbar/navbar-left/navbar-left.component';
import { NavbarRightComponent } from './navbar/navbar-right/navbar-right.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstSectionComponent,
    BunnyComponent,
    FooterContainerComponent,
    FooterLinkComponent,
    FooterLogoComponent,
    FooterSocialComponent,
    NavbarContainerComponent,
    NavbarLeftComponent,
    NavbarRightComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
