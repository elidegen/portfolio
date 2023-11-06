import { Component, ElementRef, HostListener, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.scss']
})

export class ProjectComponentComponent implements AfterViewInit {
  projects = [
    {
      name: 'Join',
      language: 'HTML | CSS | Javascript | Firebase',
      description: 'Join is a robust Kanban management system designed to help teams efficiently organize, manage, and visualize tasks and projects. With intuitive features, real-time collaboration, and it\'s beautyful design, Join enables seamless teamwork and enhances productivity for every team.',
      github: 'https://github.com/elidegen/join',
      ftp: 'https://elijah-degen.developerakademie.net/join/',
      img: 'assets/img/laptopJoin.png'
    },
    {
      name: 'Knights Journey',
      language: 'HTML | CSS | Javascript',
      description: 'Are you ready to prove your bravery and determination to save the kingdom from darkness? Follow in the footsteps of a true knight and experience an exciting adventure in Knight\'s Journey. Become the hero the kingdom desperately needs and defeat the dark forces that threaten it!',
      github: 'https://github.com/elidegen/game',
      ftp: 'https://elijah-degen.developerakademie.net/game/',
      img: 'assets/img/laptopGame.png'
    },
    {
      name: 'Portfolio',
      language: 'Angular | Typescript | HTML | CSS',
      description: 'You like the website you are currently on? Of course I created it by myself. Check it out!',
      github: 'github.com/elidegen/portfolio',
      ftp: 'https://elijah-degen.developerakademie.net/portfolio/',
      img: 'assets/img/laptopPortfolio.png'
    },
    {
      name: 'Join',
      language: 'Angular | Typescript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      github: 'github.com/elidegen/join',
      ftp: 'https://elijah-degen.developerakademie.net/join/',
      img: 'assets/img/laptop.png'
    },
  ];
  elements: any;
  constructor(private elem: ElementRef) { }

  ngAfterViewInit(): void {
    this.elements = document.querySelectorAll('.hidden');
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.elements.forEach((element: any) => {
      const componentPosition = element.offsetTop;
      const componentHeight = element.offsetHeight;
      const scrollPosition = window.pageYOffset;
      const pageBottom = scrollPosition + window.innerHeight;
      // console.log(pageBottom);

      if (pageBottom >= componentPosition + 170) {
        element.classList.add('showBottom');
        element.classList.remove('hideBottom', 'hidden');
      } else {
        element.classList.add('hideBottom');
      }
    });
  }



  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   this.elements.forEach(el => {
  //     const componentPosition = el.nativeElement.offsetTop
  //     const scrollPosition = window.pageYOffset
  //     console.log('yeyy');
  //     if (scrollPosition >= componentPosition - 100) {

  //       //   this.state = 'show'
  //       // } else {
  //       //   this.state = 'hide'
  //     }

  //   });
  // }


  ngOnInit() {
  }
}


// @ViewChildren('hidden') myElements!: QueryList<ElementRef>;


// @HostListener('window:scroll', ['$event'])
//   checkScroll() {
//     this.myElements.forEach(el => {
//       const componentPosition = el.nativeElement.offsetTop
//       const scrollPosition = window.pageYOffset
//       console.log('yeyy');
//       if (scrollPosition >= componentPosition - 100) {

//         //   this.state = 'show'
//         // } else {
//         //   this.state = 'hide'
//       }

//     });
//   }


//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       console.log(entry);
//       // if (entry.isIntersecting) {
//       //   entry.target.classList.add('show');
//       // } else {
//       //   entry.target.classList.remove('show');
//       // }
//     });
//   });

//   this.myElements.forEach((el) => observer.observe(el.nativeElement));


// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     } else {
//       entry.target.classList.remove('show');
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));