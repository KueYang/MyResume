import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {

  public educations: Array<{degree: string, institute: string, startDate: Date, endDate: Date, gpa?: number, minors?: string}> = [
    {
      degree:"Computer Engineer, B.S.",
      institute: "University of Akron",
      startDate: new Date(2012, 6, 2),
      endDate: new Date(2017, 5, 26),
      gpa: 3.9,
      minors: [
        "Applied Mathematics"
      ].join(",")
    },
    {
      degree:"Associates of Arts",
      institute: "University of Akron",
      startDate: new Date(2008, 8, 14),
      endDate: new Date(2012, 5, 26),
      gpa: 4.0
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
