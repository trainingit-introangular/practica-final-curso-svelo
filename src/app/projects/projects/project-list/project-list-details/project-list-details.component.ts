import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../../../projects.service';

@Component({
  selector: 'app-project-list-details',
  templateUrl: './project-list-details.component.html'
})
export class ProjectListDetailsComponent implements OnInit {
  @Input() public projects: [];
  @Input() public apiProjects$: Observable<any> = null;
  public resultado: any;
  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.subscribeProjects();
  }

  clearAllProjects() {
    this.projectsService.deleteProjects();
    this.subscribeProjects();
  }

  hasProjects(): Boolean {
    let hasProject = true;
    if (this.resultado == null) hasProject = false;
    return hasProject;
  }

  subscribeProjects() {
    this.apiProjects$.subscribe(result => {
      this.resultado = result;
    });
  }
}
