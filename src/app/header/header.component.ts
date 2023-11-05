import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  scrollPosition: number = 0;
  innerWidth: any;
  menuShow: boolean = false;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event: Event): void {
    this.scrollPosition = window.scrollY;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 670) {
      this.menuShow = false
    }
  }

  toggleMenu() {
    this.menuShow = !this.menuShow;
  }
}