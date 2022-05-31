import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements OnInit {

  public projects: Array<{ title: string, summary: string, link?: string, duties: Array<string>, tags: Array<string> }> = [
    { 
      title: "48hrbooks", 
      summary: "Product information and ordering website with advanced, multi-step configuration interface and supporting tutorials for ordering self-published books.",
      link: "https://www.48hrbooks.com/",
      duties:[
        "Developed administrative management system used for managing orders & employees.",
        "Developed APIs interface for automating client orders.",
        "Developed front-end website & APIs.",
        "Front-end content management."
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
      title: "JDM Outdoors", 
      summary: "Consumer site for ordering outdoor furnitures and products.",
      link: "https://jdmoutdoors.com/",
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
    },
    { 
      title: "JDM Structures", 
      summary: "Consumer site for ordering Amish sheds, barns, cabins, etc.",
      link: "https://jdmstructures.com/",
      duties:[
        "Integrated internal APIs for finding and locating stores and specific content (sheds, barns, etc.).",
        "Front-end content management."
      ],
      tags: [
        "ASP.NET MVC",
        "SQL Server",
        "AWS/S3",
        "RestSharp",
        "bootstrap 4",
        "jQuery"
      ]
    },
    { 
      title: "Karty Go", 
      summary: "Cleveland golf reservations website.",
      link: "https://kartygo.com/",
      duties:[
        "Developed administrative POS management system for managing reservations & products.",
        "Developed front-end website used to make reservations.",
        "Integated UI/UX designs for both the front-end site and administrative system.",
      ],
      tags: [
        "angular",
        "strAPIs",
        "mysql",
        "bootstrap 4"
      ]
    },
    { 
      title: "LLCR", 
      summary: "Chicago luxury apartment rental website.",
      link: "https://luxurylivingchicagorealty.com/",
      duties:[
        "Developed administrative content management system in wordpress.",
        "Integrate UI/UX designs on front-end website."
      ],
      tags: [
        "wordpress",
        "docker",
        "phpAdmin",
        "postgresql",
        "underscores wordpress base theme",
        "bootstrap 4"
      ]
    },
    { 
      title: "Provide A Ride Website", 
      summary: "Consumer facing website for a logistics company.",
      link: "https://providearide.com/",
      duties:[
        "Developed administrative management system for managing logistics and customers.",
        "Developed APIs interface to support mobile applications and websites.",
        "Developed customer front-end website.",
      ],
      tags: [
        "angular",
        "wordpress",
        ".Net Core",
        "SQL Server",
        "bootstrap 4",
        "jQuery"
      ]
    },
    { 
      title: "Acme Fresh Market", 
      summary: "A grocery store chain based in Akron, OH.",
      link: "https://www.acmestores.com/",
      duties:[
        "Developed administrative content management system for managing inventory and front-end content.",
        "Developed APIs interface to support mobile applications.",
        "Developed customer front-end website for ordering groceries and managing shopping carts.",
        "Integrated Elastic Search to improve product search results.",
      ],
      tags: [
        "Asp.Net MVC",
        "Elastic Search",
        "Sql Server",
        "bootstrap 3"
      ]
    },
    { 
      title: "Akron YMCA", 
      summary: "A non-profit organization in Northeast Ohio.",
      link: "https://www.akronymca.org/",
      duties:[
        "Developed administrative management system for managing all organizations and content on the front-end website.",
        "Integrated UI/UX designs into new pages on the front-end website.",
      ],
      tags: [
        "Asp.Net MVC",
        "Asp.Net Razor Pages",
        "Sql Server",
        "bootstrap 3"
      ]
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
