import { Component, OnInit } from '@angular/core';
import { faAngular, faBootstrap, faCss3, faDocker, faHtml5, faLess, faNodeJs, faNpm, faSass, faStripe, faWordpress, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faKeyboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  public frameworksAndLibs: Array<IconDefinition> = [
    faHtml5,
    faCss3,
    faSass,
    faLess,
    faBootstrap,
    faNpm,
    faAngular,
    faNodeJs,
    faWordpress,
    faStripe,
    faDocker
  ];

  public faKeyboard = faKeyboard;
  public languages: Array<string> = [
    'C#',
    'Typescript',
    'Javascript'
  ];

  public faCheckSquare = faCheckSquare;
  public workflows: Array<string> = [
    'Mobile-First, Responsive Design',
    'Cross Browser Testing & Debugging',
    'Cross Functional Teams',
    'Agile Development & Scrum ',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
