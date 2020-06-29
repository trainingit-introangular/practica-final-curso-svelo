import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  public projects = [];
  constructor() {}

  ngOnInit(): void {
    this.projects = environment.projects;
  }
}
