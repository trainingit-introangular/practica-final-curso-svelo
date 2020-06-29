import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    // si lo pongo com childre me funciona bien pero no me recarga la pagina, clico y tengo q hacer F5 para que recargue la pagina ¿por 1que?
    children: [
      {
        path: 'projectsList',
        component: ProjectListComponent
      },
      {
        path: 'projectsList/:id',
        component: ViewerProjectComponent
      }
    ]
  },
  {
    path: 'new',
    component: NewProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
