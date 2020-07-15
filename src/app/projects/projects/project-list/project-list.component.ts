import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';

@Component( {
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
} )
export class ProjectListComponent implements OnInit {
  public projects = [];
  constructor( private projectsService: ProjectsService ) { }

  ngOnInit(): void {
    this.projects = this.projectsService.projectsService;
  }
}
