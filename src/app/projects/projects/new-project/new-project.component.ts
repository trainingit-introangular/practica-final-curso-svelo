import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html'
})
export class NewProjectComponent implements OnInit {
  public projects = [];
  public nameP = '';

  constructor() {}

  ngOnInit(): void {
    this.projects = environment.projects;
  }

  public saveProject(): void {
    const cont = this.projects.length + 1;
    const project = { id: cont, name: this.nameP };
    this.projects.push(project);
    environment.projects = this.projects;
  }

  public nameEmpty(): Boolean {
    const l = this.nameP.length;
    if (l == 0) {
      return true;
    } else return false;
  }
}
