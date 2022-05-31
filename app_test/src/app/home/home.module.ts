import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { Components } from './components';

@NgModule({
  declarations: [
    LayoutComponent,
    Components
  ],
  imports: [
    CommonModule,
    
    FontAwesomeModule,
    
    HomeRoutingModule
  ]
})
export class HomeModule { }
