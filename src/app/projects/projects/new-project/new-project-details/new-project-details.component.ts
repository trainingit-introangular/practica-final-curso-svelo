import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component( {
  selector: 'app-new-project-details',
  templateUrl: './new-project-details.component.html'
} )
export class NewProjectDetailsComponent implements OnInit {
  @Output() public saveProject = new EventEmitter<string>();


  public nameP = '';
  constructor() { }

  ngOnInit(): void {
  }

  public nameEmpty(): Boolean {
    const l = this.nameP.length;
    if ( l === 0 ) {
      return true;
    } else return false;
  }

  onPropagar() {
    this.saveProject.emit( this.nameP );
  }
}
