import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.sass']
})
export class ProjectInfoComponent implements OnInit {

  @Input()
  title!: string;

  @Input()
  summary!: string;

  @Input()
  duties!: Array<string>;

  @Input()
  link?: string;

  @Input()
  tags?: Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
