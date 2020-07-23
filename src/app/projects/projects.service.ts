import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private apiUrl = 'https://api-base.herokuapp.com/api/pub/projects';

  public currentProyects: any = null;
  public myProyects: Observable<any> = null;

  constructor(private httpClient: HttpClient) {}
  public projectsService = [
    { id: 1, name: 'Learn Angular (Service)' },
    { id: 2, name: 'Develop My Dream app (Service)' },
    { id: 3, name: 'Travel around the world (Service)' },
    { id: 4, name: 'Clean my room (Service)' }
  ];

  public projectsApi = {
    children: [
      {
        Id: 1,
        name: 'Learn Angular (Service)'
      },
      {
        id: 2,
        name: 'Develop My Dream app (Service)'
      }
    ]
  };

  public getProjects() {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  public postProject(name) {
    this.httpClient.post(this.apiUrl, { name: name }).subscribe();
  }

  public deleteProjects() {
    this.httpClient.delete(this.apiUrl).subscribe();
  }
}
