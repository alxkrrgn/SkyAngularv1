import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HomeComponent,
    AppComponent,
    HeaderComponent,
  ],
  providers: [],
// Removed bootstrap array as AppComponent is standalone
})
export class AppModule { }

