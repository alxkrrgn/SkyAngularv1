import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';

//import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from "./components/header/header.component";  // ✅ Correct path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
