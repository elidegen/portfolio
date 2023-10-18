import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.scss']
})
export class ProjectComponentComponent {
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
      name: 'Join',
      language: 'Angular | Typescript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      github: 'github.com/elidegen/join',
      ftp: 'https://elijah-degen.developerakademie.net/join/',
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
}
