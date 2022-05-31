import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import("./projects/projects.module").then(m => m.ProjectsModule)
  },
  {
    path: '',
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
