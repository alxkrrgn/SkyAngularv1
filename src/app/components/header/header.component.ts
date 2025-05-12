/*
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuActive = false;
  isOnScroll = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  closeMenu() {
    this.isMenuActive = false;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isOnScroll = window.scrollY >= 85;
  }

  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth > 768) {
      this.isMenuActive = false;
    }
  }
}
*/

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  isDesktop = false;

  isBrowser: boolean = false;

constructor() {
  this.isBrowser = typeof window !== 'undefined';
}

ngOnInit(): void {
  if (this.isBrowser) {
    this.checkViewport();
    window.addEventListener('resize', this.checkViewport.bind(this));
  }
}
/*
  ngOnInit() {
    this.checkViewport();
  }
*/
  @HostListener('window:resize', [])
  onResize() {
    this.checkViewport();
  }

  checkViewport() {
    if (!this.isBrowser) return;

    const width = window.innerWidth;
    this.isDesktop = width >= 768;
    this.isDesktop = window.innerWidth >= 768;
    if (this.isDesktop) {
      this.menuOpen = false;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
