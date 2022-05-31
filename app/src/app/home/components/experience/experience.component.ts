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
      workLocation: "Hello World, Inc.",
      startDate: new Date(2006, 5, 26),
      duties: [
        "Develop responsive web applications.",
        "Developed REST APIs.",
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
