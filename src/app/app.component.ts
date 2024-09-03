import { Component} from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reydon';
  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    // Subscribe to router events and scroll to top on NavigationEnd
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]); // Scroll to the top of the page
      }
    });
  }
}
