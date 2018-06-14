import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class ThreadGuardService implements CanActivate {
  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot):  boolean {
    let id = route.url[1].path;
    if (id.length === 0) {
      alert('Invalid Thread ID');
      this._router.navigate(['/threads']);
      return false;
    }
    return true;
  }
}
