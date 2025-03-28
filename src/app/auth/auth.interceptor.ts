import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from './auth.service';
import {catchError, throwError} from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const token = authService.token;

  if (!token) return next(req)

  req = req.clone(
    {
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    }
  )
  return next(req).pipe(
    catchError(err => {
      if (err.status === 403) {
        refreshAndProceed(authService, req, next)
      }
      return throwError(err)
    })
  )
};


const refreshAndProceed = (
  authService: AuthService,
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  return authService.refreshAuthToken()
    .pipe(

    )
}


