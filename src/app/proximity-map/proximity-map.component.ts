import { AfterViewInit, Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { LatLngLiteral } from 'leaflet';
import { Proximity } from '../models/layout-proximity';

@Component({
  selector: 'app-proximity-map',
  templateUrl: './proximity-map.component.html',
  styleUrls: ['./proximity-map.component.css']
})
export class ProximityMapComponent implements AfterViewInit, OnChanges {
  @Input() mainLocation: { Latitude: number, Longitude: number } | null = null;
  @Input() proximityLocations: Proximity[] = [];

  center: L.LatLngLiteral = { lat: 12.9716, lng: 77.5946 }; // Default center location
  zoom = 12;

  projectLocation: L.LatLngLiteral = { lat: 12.9716, lng: 77.5946 }; // Default project location
  proximities: { lat: number, lng: number, name: string, distance: string, duration: string }[] = [];

  map: L.Map | undefined;
  dataLoaded = false; // Flag to ensure all data is loaded

  ngAfterViewInit(): void {
    this.checkDataAndInitializeMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mainLocation'] || changes['proximityLocations']) {
      this.checkDataAndInitializeMap();
    }
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
      distance: location.Distance,
      duration: location.Duration
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

    // Project location marker with label
    this.addMarkerWithLabel(this.projectLocation.lng, this.projectLocation.lat, 'Project Location');

    this.proximities.forEach(proximity => {
      this.addMarkerWithLabel(proximity.lng, proximity.lat, `${proximity.name}`, {
        textOnly: false,
        customStyle: {
          color: 'blue',
          fontSize: '14px',
          fontWeight: 'bold',
          textAlign: 'center'
        }
      });
      bounds.extend([proximity.lat, proximity.lng]);
    });

    this.map!.fitBounds(bounds);
  }

  private addMarkerWithLabel(
    lng: number,
    lat: number,
    labelText: string,
    options: { textOnly?: boolean, textSize?: string, customStyle?: any } = {}
  ): void {
    const marker = L.marker([lat, lng]).addTo(this.map!);

    const labelOptions: L.PopupOptions = {
      className: options.textOnly ? 'leaflet-text-only' : '',
    };

    if (options.customStyle) {
      labelOptions.className += ' custom-label-style';
    }

    marker.bindPopup(labelText, labelOptions).openPopup();

    if (options.textSize) {
      // Customize text size via CSS
      marker.getPopup()?.getElement()?.style.setProperty('font-size', options.textSize);
    }

    if (options.customStyle) {
      const popupElement = marker.getPopup()?.getElement();
      if (popupElement) {
        for (const [key, value] of Object.entries(options.customStyle)) {

          popupElement.style.setProperty(key, value as string);
        }
      }
    }
  }
}
