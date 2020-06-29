import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {
  public projects = [];
  constructor() {}

  ngOnInit(): void {
    this.projects = environment.projects;
  }
}
