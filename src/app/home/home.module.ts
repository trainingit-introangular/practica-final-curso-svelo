import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeDetailsComponent } from './home/home-details/home-details.component';
import { HomeComponent } from './home/home.component';

@NgModule( {
  declarations: [HomeComponent, HomeDetailsComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent]
} )
export class HomeModule { }
