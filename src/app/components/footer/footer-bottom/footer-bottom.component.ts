import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-bottom',
  templateUrl: './footer-bottom.component.html',
  styleUrls: ['./footer-bottom.component.css']
})
export class FooterBottomComponent implements OnInit {

  languages: Array<string> = ['العربية', 'বাংলা', 'English', 'Deutsch', 'Ελληνικά', 'Español', 'Suomalainen', 'Filipino', 'Français', 'हिंदी', 'Magyar', 'Bahasa Indonesia', 'Italiano', '日本語', '한국어', 'Nederlands', 'Polski', 'Português (Brazil)', 'Português', 'Română', 'Русский', 'Svenska', 'தமிழ்', 'Türkçe', 'Українська', 'Tiếng Việt', '简体中文', '繁體中文']

  constructor() { }

  ngOnInit(): void {
  }

}
