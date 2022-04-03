import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirstSectionComponent } from './components/homepage/sections/first-section/first-section.component';
import { BunnyComponent } from './components/homepage/animations/lunarbunny/bunny.component';
import { FooterContainerComponent } from './components/footer/footer-container/footer-container.component';
import { FooterLinkComponent } from './components/footer/footer-link/footer-link.component';
import { FooterLogoComponent } from './components/footer/footer-logo/footer-logo.component';
import { FooterSocialComponent } from './components/footer/footer-social/footer-social.component';
import { NavbarContainerComponent } from './components/navbar/navbar-container/navbar-container.component';
import { NavbarLeftComponent } from './components/navbar/navbar-left/navbar-left.component';
import { NavbarRightComponent } from './components/navbar/navbar-right/navbar-right.component';
import { SecondSectionComponent } from './components/homepage/sections/second-section/second-section.component';
<<<<<<< HEAD
import { CardSingleComponent } from './components/card-single/card-single.component';
=======
import { ThirdSectionComponent } from './components/homepage/sections/third-section/third-section.component';
import { FourthSectionComponent } from './components/homepage/sections/fourth-section/fourth-section.component';
import { BunnyBitcoinsComponent } from './components/homepage/animations/bunny-bitcoins/bunny-bitcoins.component';
import { CryptoStatsComponent } from './components/homepage/data/crypto-stats.component';
>>>>>>> 1f073ee570bfef862ba9c9eb82084c9730b72245


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
    NavbarRightComponent,
    SecondSectionComponent,
<<<<<<< HEAD
    CardSingleComponent
=======
    ThirdSectionComponent,
    FourthSectionComponent,
    BunnyBitcoinsComponent,
    CryptoStatsComponent
>>>>>>> 1f073ee570bfef862ba9c9eb82084c9730b72245
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
