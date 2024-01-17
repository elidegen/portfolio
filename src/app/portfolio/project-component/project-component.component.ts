import { Component, ElementRef, HostListener, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.scss']
})

export class ProjectComponentComponent implements AfterViewInit {
  projects = [
    {
      name: 'DA Bubble',
      language: 'Angular | Firebase | Typescript | SCSS',
      description: 'I created a chat app inspired by Slack. It helps teams communicate and work together better.',
      github: 'https://github.com/elidegen/dabubble',
      ftp: 'https://dabubble.elijahdegen.de/',
      img: 'assets/img/laptopDABubble.png'
    },
    {
      name: 'Join',
      language: 'HTML | CSS | Javascript',
      description: 'Join is a way for teams to manage tasks and projects using Kanban. Check it out!',
      github: 'https://github.com/elidegen/join',
      ftp: 'https://join.elijahdegen.de/',
      img: 'assets/img/laptopJoin.png'
    },
    {
      name: 'Knights Journey',
      language: 'HTML | CSS | Javascript',
      description: 'Are you ready to prove your bravery and determination to save the kingdom from the evil forces? Warning: highly addictive!',
      github: 'https://github.com/elidegen/game',
      ftp: 'https://game.elijahdegen.de/',
      img: 'assets/img/laptopGame.png'
    },
    // {
    //   name: 'Portfolio',
    //   language: 'Angular | Typescript | HTML | SCSS',
    //   description: 'You like the website you are currently on? Of course I created it by myself. Check it out!',
    //   github: 'https://github.com/elidegen/portfolio',
    //   ftp: 'https://elijahdegen.de/',
    //   img: 'assets/img/laptopPortfolio.png'
    // },
  ];
  elements: any;
  constructor() { }

  ngAfterViewInit(): void {
    this.elements = document.querySelectorAll('.hidden');
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.elements.forEach((element: any) => {
      const componentPosition = element.offsetTop;
      const scrollPosition = window.pageYOffset;
      const pageBottom = scrollPosition + window.innerHeight;

      if (pageBottom >= componentPosition + 170) {
        element.classList.add('showBottom');
        element.classList.remove('hideBottom', 'hidden');
      } else {
        element.classList.add('hideBottom');
      }
    });
  }
}