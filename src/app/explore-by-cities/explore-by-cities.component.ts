import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-by-cities',
  templateUrl: './explore-by-cities.component.html',
  styleUrl: './explore-by-cities.component.css'
})
export class ExploreByCitiesComponent {
  cities=['Chennai','Coimbatore','Madurai','Trichy']

  constructor(private router:Router){}

  gotoProjects(city:string){
    this.router.navigate(['projects'],{queryParams:{city:city}});
  }
}
