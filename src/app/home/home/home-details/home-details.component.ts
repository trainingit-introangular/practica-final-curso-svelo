import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html'
})
export class HomeDetailsComponent implements OnInit {
  public numProjects: number;
  @Input() public numProjects$: Observable<any>;

  constructor() {}

  ngOnInit(): void {}
}
