import { AfterViewInit, Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Proximity } from '../models/layout-proximity';

@Component({
  selector: 'app-proximity-google-map',
  templateUrl: './proximity-google-map.component.html',
  styleUrls: ['./proximity-google-map.component.css']
})
export class ProximityGoogleMapComponent implements OnInit {

  @Input() mainLocation: { Latitude: number, Longitude: number } | null = null;

  center = { lat: 12.9716, lng: 77.5946 }; // Default center location
  zoom = 15;

  private map!: google.maps.Map;

  projectLocation = { lat: 12.9716, lng: 77.5946 };
  proximities: { lat: number, lng: number, name: string, distance: string, duration: string, category: string }[] = [];

  ngOnInit(): void {
    this.initMap();
  }

  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    disableDefaultUI: true,
    zoomControl: true,
  };

  /** Initializes the map and the custom popup. */
  private initMap(): void {
    if (this.mainLocation) {
      this.center = { lat: this.mainLocation.Latitude, lng: this.mainLocation.Longitude };
      this.projectLocation = { lat: this.mainLocation.Latitude, lng: this.mainLocation.Longitude };
    } else {
      console.error('Main location is null');
    }

    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: this.center,
      zoom: this.zoom
    });

    new google.maps.Marker({
      position: this.projectLocation,
      map: this.map,
      title: 'Project Location'
    });
  }
}