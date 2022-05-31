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
    name: "First Name Last Name",
    email: "email@email.com",
    phone: "123.456.7890",
    linkedInUrl: "https://www.google.com/",
    githubUrl: "https://www.google.com/"
  };

  public faLinkedinin = faLinkedinIn;
  public faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
