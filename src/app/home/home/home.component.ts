import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects/projects.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html'
} )
export class HomeComponent implements OnInit {
  public numProjects;

  constructor( private projectsService: ProjectsService ) { }

  ngOnInit(): void {
    this.numProjects = this.projectsService.projectsService.length;

  }
}
