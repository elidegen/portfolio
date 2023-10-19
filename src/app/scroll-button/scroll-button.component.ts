import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent {
  verticalOffset: number = 0;

  @HostListener("window:scroll", []) onWindowScroll() {
    this.verticalOffset = document.documentElement.scrollTop
      || document.body.scrollTop || 0;
    console.log(this.verticalOffset);
  }
}
