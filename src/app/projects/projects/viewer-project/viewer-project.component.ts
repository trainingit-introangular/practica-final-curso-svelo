import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html'
})
export class ViewerProjectComponent implements OnInit {
  public projectId;
  public project$;
  public resultado;
  constructor(activateRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.projectId = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.subscribeProject();
  }

  subscribeProject() {
    this.project$ = this.projectsService.getProjectById(this.projectId).subscribe(data => {
      this.resultado = data;
      if (data != null) this.mapResult();
    });
  }
  private mapResult() {
    this.resultado = {
      name: this.resultado.name.projectName,
      projectDescription: this.resultado.name.projectDescription,
      numTeam: this.resultado.name.numTeam,
      id: this.resultado._id
    };
  }
}
