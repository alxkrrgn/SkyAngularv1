import { Component, Inject, PLATFORM_ID, ChangeDetectorRef, OnInit } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isDesktop = false; // ❌ was true — fix this!
  menuOpen = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateViewportState();

      window.addEventListener('resize', () => {
        this.updateViewportState();
      });

      AOS.init({
        duration: 1200,
        once: true,
      });
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  // In component.ts
testimonials = [
  { quote: "SNOW changed the game!", author: "CryptoDude42" },
  { quote: "Meme coins finally make sense!", author: "Jane.eth" }
];

  private updateViewportState() {
    const isNowDesktop = window.innerWidth > 768;
    if (this.isDesktop !== isNowDesktop) {
      this.isDesktop = isNowDesktop;
      this.cdr.detectChanges();
    }
  }
}










