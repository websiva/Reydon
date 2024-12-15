import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = Inject(Router);

  const isAuthenticated = true;

  if(isAuthenticated){
    return true;
  }
  else{
    router.navigate(['/login'], {queryParams: { returnUrl: state.url },
    });
    return false;
  }
  
};
