import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

  public projects: Array<{ title: string, summary: string, link?: string, duties: Array<string>, tags: Array<string> }> = [
    { 
      title: "Project #1", 
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "https://www.google.com/",
      duties:[
        "Developed administrative management system used for managing orders & employees.",
        "Developed APIs interface for automating client orders."
      ],
      tags: [
        "ASP.NET MVC",
        "SQL Server",
        "angular",
        "npmjs",
        "AWS/S3",
        "Authorize.Net",
        "bootstrap 4"
      ]
    },
    { 
      title: "Project #2", 
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      link: "https://www.google.com/",
      duties:[
        "Developed administrative management system for managing inventory & content.",
        "Developed APIs interface to support other JDM applications and websites.",
        "Developed front-end website.",
        "Front-end content management."
      ],
      tags: [
        ".NET Core MVC",
        "SQL Server",
        "AWS/S3",
        "Azure Maps",
        "bootstrap 4",
        "jQuery"
      ]
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
