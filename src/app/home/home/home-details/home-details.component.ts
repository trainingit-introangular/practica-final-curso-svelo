import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-home-details',
  templateUrl: './home-details.component.html'
} )
export class HomeDetailsComponent implements OnInit {
  @Input() public numProjects: number;

  constructor() { }

  ngOnInit(): void {
  }

}
