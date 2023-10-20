import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent implements OnInit {
  scrollPosition: number = 0;
  ngOnInit() {

  }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event: Event): void {
    this.scrollPosition = window.scrollY; // Gescrollte Position in Pixeln
    // console.log('Gescrollte Position:', this.scrollPosition);
  }

  // scrollPosition: number = 0;

  // constructor(private elementRef: ElementRef) { }

  // ngAfterViewInit() {
  //   console.log('init');
    
  //   const scrollableDiv = this.elementRef.nativeElement.querySelector('#stickyContainer');
  //   if (scrollableDiv) {      
  //     scrollableDiv.addEventListener('scroll', this.onDivScroll.bind(this));
  //   }
  // }

  // onDivScroll(event: Event) {
  //   // Diese Funktion wird bei jedem Scrollereignis aufgerufen, wenn in der Div gescrollt wird
  //   const scrollableDiv = this.elementRef.nativeElement.querySelector('#stickyContainer');
  //   if (scrollableDiv) {
  //     this.scrollPosition = scrollableDiv.scrollTop; // Gescrollte Position in der Div
  //     console.log('Gescrollte Position:', this.scrollPosition);

  //     // Hier kannst du die Logik ausführen, die du benötigst, um auf das Scroll-Ereignis in der Div zu reagieren
  //   }
  // }
}