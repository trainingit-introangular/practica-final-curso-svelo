import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-project-list-details',
  templateUrl: './project-list-details.component.html'
} )
export class ProjectListDetailsComponent implements OnInit {
  @Input() public projects: [];

  constructor() { }

  ngOnInit(): void {
  }

}
