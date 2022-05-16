import { Component, OnInit } from '@angular/core';
import { ILanguage } from 'src/app/models/INav';

@Component({
  selector: 'app-navbar-language',
  templateUrl: './navbar-language.component.html',
  styleUrls: ['./navbar-language.component.css']
})
export class NavbarLanguageComponent implements OnInit {

  languages: ILanguage[]=[
    {
      linguage:"العربي"
    },
    {
      linguage: "বাংলা"
    },
    {
      linguage: "English"
    },
    {
      linguage: "Deutsch"
    },
    {
      linguage: "Ελληνικά"
    },
    {
      linguage:"Español"
    },
    {
      linguage:"Suomalainen"
    },
    {
      linguage:"Filipino"
    },
    {
      linguage:"Français"
    },
    {
      linguage:"हिंदी"
    },
    {
      linguage:"Magyar"
    },
    {
      linguage:"Bahasa Indonesia"
    },
    {
      linguage:"Italiano"
    },
    {
      linguage:"日本語"
    },
    {
      linguage:"한국어"
    },
    {
      linguage:"Nederlands"
    },
    {
      linguage:"Polski"
    },
    {
      linguage:"Português(Brazil)"
    },
    {
      linguage:"Português"
    },
    {
      linguage:"Română"
    },
    {
      linguage:"Русский"
    },
    {
      linguage:"Svenska"
    },
    {
      linguage:"தமிழ்"
    },
    {
      linguage:"Türkçe"
    },
    {
      linguage:"Українська"
    },
    {
      linguage:"Tiếng Việt"
    },
    {
      linguage:"简体中文"
    },
     
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
