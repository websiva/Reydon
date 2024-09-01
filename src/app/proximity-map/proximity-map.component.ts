import { AfterViewInit, Component, OnInit,Input, OnChanges,SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { LatLngLiteral } from 'leaflet';
import { Proximity } from '../models/layout-proximity';

@Component({
  selector: 'app-proximity-map',
  templateUrl: './proximity-map.component.html',
  styleUrl: './proximity-map.component.css'
})
export class ProximityMapComponent implements AfterViewInit, OnChanges {
  @Input() mainLocation: { Latitude: number, Longitude: number } | null = null;
  @Input() proximityLocations: Proximity[] = [];

  center: L.LatLngLiteral = { lat: 12.9716, lng: 77.5946 }; // Default center location
  zoom = 12;

  projectLocation: L.LatLngLiteral = { lat: 12.9716, lng: 77.5946 }; // Default project location
  proximities: { lat: number, lng: number, name: string ,distance:string,duration:string}[] = [];

  map: L.Map | undefined;
  dataLoaded = false; // Flag to ensure all data is loaded

  ngAfterViewInit(): void {
    this.checkDataAndInitializeMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mainLocation']) {
    }
    if (changes['proximityLocations']) {
    }
    this.checkDataAndInitializeMap();
  }

  checkDataAndInitializeMap(): void {
    if (this.mainLocation && this.proximityLocations.length > 0) {
      this.dataLoaded = true; // Set flag indicating data is loaded
      this.updateMapData();

      if (!this.map) {
        this.initMap(); // Initialize the map only once when data is available
      } else {
        this.updateMapMarkers(); // Update markers if map already exists
      }
    }
  }

  updateMapData(): void {
    if (this.mainLocation) {
      this.center = { lat: this.mainLocation.Latitude, lng: this.mainLocation.Longitude };
      this.projectLocation = { lat: this.mainLocation.Latitude, lng: this.mainLocation.Longitude };
    }

    this.proximities = this.proximityLocations.map(location => ({
      lat: location.Latitude,
      lng: location.Longitude,
      name: location.ProximityName,
      distance:location.Distance,
      duration:location.Duration
    }));

    console.log('updateMapData - proximities:', this.proximities);
  }

  initMap(): void {
    if (!this.center || !this.projectLocation || !this.proximities.length) {
      console.log('initMap - Missing data, cannot initialize map.');
      return; // Ensure that there's data before initializing the map
    }

    this.map = L.map('map').setView(this.center, this.zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.updateMapMarkers();
  }

  updateMapMarkers(): void {
    const bounds = L.latLngBounds([]);

    L.marker(this.projectLocation, {
      icon: L.icon({
        iconUrl: 'project-marker.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      })
    }).addTo(this.map!)
      .bindPopup(`<b>Project Location</b>`);

    this.proximities.forEach(proximity => {
      const marker = L.marker([proximity.lat, proximity.lng], {
        icon: L.icon({
          iconUrl: 'proximity-marker.svg',
          iconSize: [32, 32],
          iconAnchor: [16, 32]
        })
      }).addTo(this.map!)
        .bindPopup(`<b>${proximity.name}</b><br><span>${proximity.distance} (${proximity.duration})`);

      bounds.extend(marker.getLatLng());
    });

    this.map!.fitBounds(bounds);
  }
}
