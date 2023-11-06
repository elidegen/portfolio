import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  innerWidth: any;
  touched: boolean = false;
  menuShow: boolean = false;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > 670) {
      this.menuShow = false
    }
  }

  @HostListener('document:click', ['$event'])
  checkClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
      if (!clickedElement.classList.contains('mobileLinks') && !clickedElement.classList.contains('mobileMenu') && this.menuShow) {
        this.toggleMenu();
      }
  }

  toggleMenu() {
    this.touched = true;
    this.menuShow = !this.menuShow;
  }
}