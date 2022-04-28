import { ThemeService } from './../../../services/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-bottom',
  templateUrl: './footer-bottom.component.html',
  styleUrls: ['./footer-bottom.component.css']
})
export class FooterBottomComponent implements OnInit {

  languages: Array<string> = ['العربية', 'বাংলা', 'English', 'Deutsch', 'Ελληνικά', 'Español', 'Suomalainen', 'Filipino', 'Français', 'हिंदी', 'Magyar', 'Bahasa Indonesia', 'Italiano', '日本語', '한국어', 'Nederlands', 'Polski', 'Português (Brazil)', 'Português', 'Română', 'Русский', 'Svenska', 'தமிழ்', 'Türkçe', 'Українська', 'Tiếng Việt', '简体中文', '繁體中文']

  isDarkModeEnabled$ = this.themeService.isDarkModeEnabled();

  constructor(private themeService: ThemeService) {
    setInterval(() => this.randomCryptoValue(), 5000);
  }

  cryptoValue: number = 7000; 

  randomCryptoValue(min: number = 6500, max: number = 7500): void {
    this.cryptoValue = Math.floor(Math.random() * (max-min) + min);
  }


  toggleSwitch() {
    this.themeService.toggleDarkMode();
  }

  ngOnInit(): void {
  }

}
