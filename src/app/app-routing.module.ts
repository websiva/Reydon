import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PropertyResolverService } from './angular-service/Resolvers/property-resolver.service';
import { ResidentialComponent } from './residential/residential.component';
import { CommercialComponent } from './commercial/commercial.component';
import { UpcomingProjectsComponent } from './upcoming-projects/upcoming-projects.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { PropertyManagementComponent } from './property-management/property-management.component';
import { FinancialPlanningComponent } from './financial-planning/financial-planning.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'properties', component: PropertiesComponent, resolve: { properties: PropertyResolverService } },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: ContactUsComponent },
  { path: 'residencial', component: ResidentialComponent },
  { path: 'commercial', component: CommercialComponent },
  { path: 'upcoming-projects', component: UpcomingProjectsComponent },
  { path: 'real-estate', component: RealEstateComponent },
  { path: 'property-management', component: PropertyManagementComponent },
  { path: 'financial-planning', component: FinancialPlanningComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
