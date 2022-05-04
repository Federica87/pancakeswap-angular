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
import { SecondSectionComponent } from './components/homepage/sections/second-section/second-section.component';
import { CardSingleComponent } from './components/card-single/card-single.component';
import { ThirdSectionComponent } from './components/homepage/sections/third-section/third-section.component';
import { FourthSectionComponent } from './components/homepage/sections/fourth-section/fourth-section.component';
import { BunnyBitcoinsComponent } from './components/homepage/animations/bunny-bitcoins/bunny-bitcoins.component';
import { CryptoStatsComponent } from './components/homepage/data/crypto-stats/crypto-stats.component';
import { SixthSectionComponent } from './components/homepage/sections/sixth-section/sixth-section.component';
import { LastSectionComponent } from './components/homepage/sections/last-section/last-section.component';
import { FloatingCoinsComponent } from './components/homepage/animations/floating-coins/floating-coins.component';
import { FifthSectionComponent } from './components/homepage/sections/fifth-section/fifth-section.component';
import { FloatingCardsComponent } from './components/homepage/animations/floating-cards/floating-cards.component';
import { FloatingBallsComponent } from './components/homepage/animations/floating-balls/floating-balls.component';
import { TiltedCardsComponent } from './components/tilted-cards/tilted-cards.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { FooterBottomComponent } from './components/footer/footer-bottom/footer-bottom.component';
import { CakeStatsComponent } from './components/homepage/data/cake-stats/cake-stats.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageContainerComponent } from './components/homepage/homepage-container/homepage-container';
import { AppRoutingModule } from './app-routing.module';
import { EarnModule } from './components/earn/earn.module';
import { LimitContainerComponent } from './components/trade/limit/limit-container/limit-container.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    FirstSectionComponent,
    BunnyComponent,
    FooterContainerComponent,
    FooterLinkComponent,
    FooterLogoComponent,
    FooterSocialComponent,
    SecondSectionComponent,
    CardSingleComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    BunnyBitcoinsComponent,
    CryptoStatsComponent,
    SixthSectionComponent,
    LastSectionComponent,
    FloatingCoinsComponent,
    FifthSectionComponent,
    FloatingCardsComponent,
    FloatingBallsComponent,
    TiltedCardsComponent,
    WalletComponent,
    FooterBottomComponent,
    CakeStatsComponent,
    NavbarComponent,
    HomepageContainerComponent,
    LimitContainerComponent
    ],
  imports: [
    BrowserModule,
    NgbModule,
    EarnModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
