import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import {  provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import {MatIconModule} from '@angular/material/icon';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


import { register } from 'swiper/element/bundle';
import { FooterComponent } from './footer/footer.component';
import { PropertyResolverService } from './angular-service/Resolvers/property-resolver.service';
import { PropertyService } from './angular-service/property.service';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { VisioMissionComponent } from './visio-mission/visio-mission.component';
import { HomeHeroSectionComponent } from './home-hero-section/home-hero-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OurValuesComponent } from './our-values/our-values.component';
import { ClientTestimonialsComponent } from './client-testimonials/client-testimonials.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { ResidentialComponent } from './residential/residential.component';
import { CommercialComponent } from './commercial/commercial.component';
import { UpcomingProjectsComponent } from './upcoming-projects/upcoming-projects.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { PropertyManagementComponent } from './property-management/property-management.component';
import { FinancialPlanningComponent } from './financial-planning/financial-planning.component';
import { ProductsComponent } from './products/products.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PropertyDataService } from './angular-service/property-data.service';
import { LayoutComponent } from './layout/layout.component';
import { BuildingComponent } from './building/building.component';
import { ProximityMapComponent } from './proximity-map/proximity-map.component';
import { ExploreByCitiesComponent } from './explore-by-cities/explore-by-cities.component';
import { HomeProjectsComponent } from './home-projects/home-projects.component';
import { ProximityGoogleMapComponent } from './proximity-google-map/proximity-google-map.component';
import { CareersComponent } from './careers/careers.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { FAQComponent } from './faq/faq.component';
import { NumberAnimationComponent } from './number-animation/number-animation.component';
import { VillaDetailsComponent } from './villa-details/villa-details.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { CommercialBuildingDetailsComponent } from './commercial-building-details/commercial-building-details.component';
import { RelatedProjectsComponent } from './related-projects/related-projects.component';
import { LithiumUPSComponent } from './lithium-ups/lithium-ups.component';
import { EnergyStorageSystemComponent } from './energy-storage-system/energy-storage-system.component';
import { UnitConverterComponent } from './unit-converter/unit-converter.component';
import { AreaConverterComponent } from './area-converter/area-converter.component';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';
import { ElectricVehicleBatteryComponent } from './electric-vehicle-battery/electric-vehicle-battery.component';
import { ReydonServicesComponent } from './reydon-services/reydon-services.component';


register();

@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    ProjectsComponent,
    ContactUsComponent,
    AboutUsComponent,
    NavbarComponent,
    SkeletonLoaderComponent,
    BreadCrumbComponent,
    FooterComponent,
    WhatWeDoComponent,
    OurTeamComponent,
    VisioMissionComponent,
    OurValuesComponent,
    HomeAboutComponent,
    ResidentialComponent,
    CommercialComponent,
    UpcomingProjectsComponent,
    RealEstateComponent,
    PropertyManagementComponent,
    FinancialPlanningComponent,
    ProductsComponent,
    CommingSoonComponent,
    TopbarComponent,
    LayoutComponent,
    BuildingComponent,
    ProximityMapComponent,
    ProximityGoogleMapComponent,
    CareersComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    FAQComponent,
    VillaDetailsComponent,
    ApartmentDetailsComponent,
    CommercialBuildingDetailsComponent,
    RelatedProjectsComponent,
    EnergyStorageSystemComponent,
    UnitConverterComponent,
    AreaConverterComponent,
    CookiesPolicyComponent,
    ElectricVehicleBatteryComponent,
    ReydonServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    YouTubePlayerModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync(),PropertyService,PropertyResolverService,PropertyDataService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
