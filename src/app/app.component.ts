import { Component, OnInit } from '@angular/core';
import { ProjectsStoreService } from './projects/projects/projects-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'training-projects';
  public message$;

  constructor(private projectsStoreService: ProjectsStoreService) {}

  ngOnInit() {
    this.message$ = this.projectsStoreService.select$;
  }
}
