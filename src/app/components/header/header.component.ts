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
