import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrollPosition: number = 0;

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event: Event): void {
    this.scrollPosition = window.scrollY;
    console.log(this.scrollPosition);
    
  }
}