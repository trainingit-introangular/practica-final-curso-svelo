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
  public resultado = {
    projectName: '',
    projectDescription: '',
    numTeam: null,
    id: null
  };
  constructor(activateRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.projectId = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.subscribeProject();
  }

  subscribeProject() {
    this.project$ = this.projectsService.getProjectById(this.projectId).subscribe(data => {
      //  this.resultado = data;
      if (data != null) this.mapResult(data);
    });
  }
  private mapResult(data) {
    this.resultado = {
      projectName: data.name.projectName,
      projectDescription: data.name.projectDescription,
      numTeam: data.name.numTeam,
      id: data._id
    };
  }
}
