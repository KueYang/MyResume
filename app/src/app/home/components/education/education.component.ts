import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {

  public educations: Array<{degree: string, institute: string, startDate: Date, endDate: Date, gpa?: number, minors?: string}> = [
    {
      degree:"Computer Science, B.S.",
      institute: "University of Hello World",
      startDate: new Date(2002, 6, 2),
      endDate: new Date(2006, 5, 26),
      gpa: 3.6,
      minors: [
        "Applied Mathematics"
      ].join(",")
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
