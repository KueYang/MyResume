import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  public personalInfor: {
    name: string,
    email: string,
    phone: string,
    linkedInUrl?: string,
    githubUrl?: string,
  } = {
    name: "Kue Yang",
    email: "kueyang12@gmail.com",
    phone: "330.506.2597",
    linkedInUrl: "https://www.linkedin.com/in/kue-yang-6273193a/",
    githubUrl: "https://github.com/KueYang"
  };

  public faLinkedinin = faLinkedinIn;
  public faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
