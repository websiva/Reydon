import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeProjectsComponent } from '../home-projects/home-projects.component';
import { HomeHeroSectionComponent } from '../home-hero-section/home-hero-section.component';
import { ExploreByCitiesComponent } from '../explore-by-cities/explore-by-cities.component';
import { ClientTestimonialsComponent } from '../client-testimonials/client-testimonials.component';
import { NumberAnimationComponent } from '../number-animation/number-animation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, 
    HomeProjectsComponent, 
    HomeHeroSectionComponent,
    ExploreByCitiesComponent,
    ClientTestimonialsComponent,
    NumberAnimationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
