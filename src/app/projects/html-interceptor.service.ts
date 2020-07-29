import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { ProjectsStoreService } from './projects/projects-store.service';
@Injectable({
  providedIn: 'root'
})
export class HtmlInterceptorService implements HttpInterceptor {
  private fakeToken = 'estoEsUnTokenFalso';

  constructor(private projectsStoreService: ProjectsStoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = { Authorization: 'bearer ' + this.fakeToken };
    const authReq = req.clone({ setHeaders: authHeader });
    return next.handle(authReq).pipe(
      filter((event: HttpEvent<any>) => event instanceof HttpResponse),
      tap((resp: HttpResponse<any>) => this.auditEvente(resp))
    );
  }

  private auditEvente(resp: HttpResponse<any>) {
    const evetnMsg = 'La última llamada es: ' + resp.statusText + ' ' + resp.url;
    this.projectsStoreService.dispactchProject(evetnMsg);
  }
}
