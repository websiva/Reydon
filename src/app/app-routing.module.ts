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
import { LayoutComponent } from './layout/layout.component';
import { ProximityMapComponent } from './proximity-map/proximity-map.component';
import { CareersComponent } from './careers/careers.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { FAQComponent } from './faq/faq.component';
import { VillaDetailsComponent } from './villa-details/villa-details.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { CommercialBuildingDetailsComponent } from './commercial-building-details/commercial-building-details.component';
import { LithiumUPSComponent } from './lithium-ups/lithium-ups.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'properties', component: PropertiesComponent, resolve: { properties: PropertyResolverService } },
  { path: 'services', component: ServicesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'residencial', component: ResidentialComponent },
  { path: 'commercial', component: CommercialComponent },
  { path: 'upcoming-projects', component: UpcomingProjectsComponent },
  { path: 'real-estate', component: RealEstateComponent },
  { path: 'property-management', component: PropertyManagementComponent },
  { path: 'financial-planning', component: FinancialPlanningComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'Layout/:projectName', component: LayoutComponent },
  { path: 'proximity-map', component: ProximityMapComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-of-use', component: TermsOfUseComponent },
  { path: 'FAQ', component: FAQComponent },
  { path: 'villa/:projectName', component: VillaDetailsComponent },
  { path: 'apartment/:projectName', component: ApartmentDetailsComponent },
  { path: 'building/:projectName', component: CommercialBuildingDetailsComponent },
  { path: 'lithium-ups', component: LithiumUPSComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
