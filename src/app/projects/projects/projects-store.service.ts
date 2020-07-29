import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsStoreService {
  private message = '';

  private message$ = new BehaviorSubject<string>('');

  constructor() {}

  public select$ = this.message$.asObservable();

  public dispactchProject(msg) {
    this.message = msg;
    this.message$.next(this.message);
  }
}
