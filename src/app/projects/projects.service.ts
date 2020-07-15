import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class ProjectsService {



  constructor() { }
  public projectsService = [
    { id: 1, name: 'Learn Angular (Service)' },
    { id: 2, name: 'Develop My Dream app (Service)' },
    { id: 3, name: 'Travel around the world (Service)' },
    { id: 4, name: 'Clean my room (Service)' }
  ]
}
