import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ProjectInfoComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
