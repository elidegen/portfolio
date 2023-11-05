import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.scss']
})
export class ProjectComponentComponent implements OnInit {
  hiddenElements: any;
  projects = [
    {
      name: 'Join',
      language: 'HTML | CSS | Javascript | Firebase',
      description: 'Join is a robust Kanban management system designed to help teams efficiently organize, manage, and visualize tasks and projects. With intuitive features, real-time collaboration, and it\'s beautyful design, Join enables seamless teamwork and enhances productivity for every team.',
      github: 'https://github.com/elidegen/join',
      ftp: 'https://elijah-degen.developerakademie.net/join/',
      img: 'assets/img/laptop.png'
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
      img: 'assets/img/laptop.png'
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
  // observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     console.log(entry);
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('show');
  //     } else {
  //       entry.target.classList.remove('show');
  //     }
  //   });
  // });

  ngOnInit(): void {
    // this.hiddenElements = document.querySelectorAll('.hidden');
    // this.hiddenElements.forEach((el: any) => this.observer.observe(el));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        // if (entry.isIntersecting) {
        //   entry.target.classList.add('show');
        // } else {
        //   entry.target.classList.remove('show');
        // }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }

  constructor() {

  }
}

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