import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../../projects/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public numProjects;
  public numProjects$: Observable<any>;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.numProjects = this.projectsService.projectsService.length;
    this.numProjects$ = this.projectsService.getProjects();
  }
}
