import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ProjectsService } from '../../projects.service';

@Component( {
  selector: 'app-new-project',
  templateUrl: './new-project.component.html'
} )
export class NewProjectComponent implements OnInit {
  public projects = [];
  public nameP = '';

  constructor( private projectsService: ProjectsService ) { }

  ngOnInit(): void {
    this.projects = this.projectsService.projectsService;
  }

  public onSaveProject( nombre: string ): void {
    const cont = this.projects.length + 1;
    const project = { id: cont, name: nombre };
    this.projects.push( project );
    environment.projects = this.projects;
  }

}
