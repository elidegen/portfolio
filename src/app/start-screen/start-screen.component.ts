import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {
  scrollPosition: number = 0;

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event: Event): void {
    if (window.scrollY > 930) {
      document.getElementById('header')!.classList.add('headerTransform');
      document.getElementById('imgBox')!.classList.add('d-none');
    } else {
      document.getElementById('header')!.classList.remove('headerTransform');
      document.getElementById('imgBox')!.classList.remove('d-none');
    }

    this.scrollPosition = window.scrollY; // Gescrollte Position in Pixeln
    console.log(this.scrollPosition);
  }
}
