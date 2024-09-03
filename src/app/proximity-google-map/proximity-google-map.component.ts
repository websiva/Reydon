import { AfterViewInit, Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Proximity } from '../models/layout-proximity';

@Component({
  selector: 'app-proximity-google-map',
  templateUrl: './proximity-google-map.component.html',
  styleUrls: ['./proximity-google-map.component.css']
})
export class ProximityGoogleMapComponent implements OnInit {

  @Input() mainLocation: { Latitude: number, Longitude: number } | null = null;
  @Input() proximityLocations: Proximity[] = [];

  center = { lat: 12.9716, lng: 77.5946 }; // Default center location
  zoom = 11;

  private map!: google.maps.Map;
  private popup!: Popup;

  projectLocation = { lat: 12.9716, lng: 77.5946 };
  proximities: { lat: number, lng: number, name: string, distance: string, duration: string, category: string }[] = [];

  ngOnInit(): void {
    this.initMap();
  }

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

    this.popup = new Popup(
      new google.maps.LatLng(this.projectLocation),
      document.getElementById('content') as HTMLElement
    );
    this.popup.setMap(this.map);
  }
}

/**
 * A customized popup on the map.
 */
class Popup extends google.maps.OverlayView {
  private position: google.maps.LatLng;
  private containerDiv: HTMLDivElement;

  constructor(position: google.maps.LatLng, content: HTMLElement) {
    super();
    this.position = position;

    content.classList.add('popup-bubble');

    // This zero-height div is positioned at the bottom of the bubble.
    const bubbleAnchor = document.createElement('div');
    bubbleAnchor.classList.add('popup-bubble-anchor');
    bubbleAnchor.appendChild(content);

    // This zero-height div is positioned at the bottom of the tip.
    this.containerDiv = document.createElement('div');
    this.containerDiv.classList.add('popup-container');
    this.containerDiv.appendChild(bubbleAnchor);

    // Optionally stop clicks, etc., from bubbling up to the map.
    Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
  }

  /** Called when the popup is added to the map. */
  override onAdd(): void {
    this.getPanes()!.floatPane.appendChild(this.containerDiv);
  }

  /** Called when the popup is removed from the map. */
  override onRemove(): void {
    if (this.containerDiv.parentElement) {
      this.containerDiv.parentElement.removeChild(this.containerDiv);
    }
  }

  /** Called each frame when the popup needs to draw itself. */
  override draw(): void {
    const divPosition = this.getProjection()?.fromLatLngToDivPixel(this.position);

    // Hide the popup when it is far out of view.
    const display = divPosition && Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
      ? 'block'
      : 'none';

    if (display === 'block') {
      this.containerDiv.style.left = `${divPosition!.x}px`;
      this.containerDiv.style.top = `${divPosition!.y}px`;
    }

    if (this.containerDiv.style.display !== display) {
      this.containerDiv.style.display = display;
    }
  }
}
