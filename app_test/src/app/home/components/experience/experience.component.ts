import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {

  public experiences: Array<{title: string, workLocation: string, startDate: Date, endDate?: Date, duties: Array<string>}> = [
    {   
      title: "Software Engineer",
      workLocation: "Sanctuary Software Studio",
      startDate: new Date(2017, 5, 26),
      duties: [
        "Develop responsive web applications using both .NET and Angular frameworks.",
        "Developed REST APIs to allow front-end developers to interface with back-end services.",
        "Refactored codebase and optimizing customer-facing business applications.",
        "Integrate UI designs from UX/UI designers for new and existing projects.",
        "Coordinated with tech lead and stakeholders to understand project specifications and business requirements.",
        "Provided QA feedback and code review.",
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
