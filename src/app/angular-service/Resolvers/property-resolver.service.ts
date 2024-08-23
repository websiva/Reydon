import { DecimalPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PropertyService } from '../property.service';
import { property } from '../../models/property-model';



@Injectable({
  providedIn: 'root'
})

export class PropertyResolverService implements Resolve<property[]> {

  constructor(private propertyService:PropertyService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): property[]|Promise<property[]>|Observable<property[]> {
    return this.propertyService.GetAllProperty();
  }
}
