import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request Interceptor:', req);
  if (req.method === 'GET') {
  const modifiedReq = req.clone({headers : new HttpHeaders({'token': 'GET-Request Interceptor Header'})});
  return next(modifiedReq);
  }
  else if (req.method === 'POST') {
    const modifiedReq = req.clone({headers : new HttpHeaders({'token': 'POST-Request Interceptor Header'})});
    return next(modifiedReq);
  }
  else if (req.method === 'PUT') {
    const modifiedReq = req.clone({headers : new HttpHeaders({'token': 'PUT-Request Interceptor Header'})});
    return next(modifiedReq);
  }
  else if (req.method === 'DELETE') {
    const modifiedReq = req.clone({headers : new HttpHeaders({'token': 'DELETE-Request Interceptor Header'})});
    return next(modifiedReq);
  }
  return next(req);
};
