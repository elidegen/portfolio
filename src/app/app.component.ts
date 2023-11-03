import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elijah';
  
  scrollPosition: number = 0;

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event: Event): void {
    this.scrollPosition = window.scrollY;
  }
}
