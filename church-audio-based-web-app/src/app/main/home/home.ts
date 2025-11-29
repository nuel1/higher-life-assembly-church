import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  isMobileMenuOpen = false;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;
  @ViewChild('menuToggle') menuToggle!: ElementRef;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      this.isMobileMenuOpen &&
      this.mobileMenu &&
      this.menuToggle &&
      !this.mobileMenu.nativeElement.contains(event.target) &&
      !this.menuToggle.nativeElement.contains(event.target)
    ) {
      this.isMobileMenuOpen = false;
    }
  }
}
