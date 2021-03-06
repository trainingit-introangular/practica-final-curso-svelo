import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { NewProjectDetailsComponent } from './projects/new-project/new-project-details/new-project-details.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectListDetailsComponent } from './projects/project-list/project-list-details/project-list-details.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ViewerProjectComponent,
    NewProjectComponent,
    ProjectListComponent,
    ProjectListDetailsComponent,
    NewProjectDetailsComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule, ReactiveFormsModule]
})
export class ProjectsModule {}
