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
  private res: any;
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
    this.apiProjects$.subscribe(data => {
      this.resultado = data;
      console.log(data);
      if (data != null) this.mapResult();
    });
  }
  private mapResult() {
    this.resultado = this.resultado.map(i => {
      return {
        name: i.name.projectName,
        projectDescription: i.name.projectDescription,
        numTeam: i.name.numTeam
      };
    });
  }
}
