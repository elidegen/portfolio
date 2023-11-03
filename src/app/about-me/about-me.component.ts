import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  scrollPosition: number = 0;

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(): void {
    this.scrollPosition = window.scrollY;
    console.log(this.scrollPosition);
  }
}
