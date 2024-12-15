import { Component,HostListener} from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reydon';
  scrollToTopBtn:boolean=false;
  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    // Subscribe to router events and scroll to top on NavigationEnd
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]); // Scroll to the top of the page
      }
    });
  }

  //scroll to top button functionalities
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > 500) {
      this.scrollToTopBtn = true;
    }
    else {
      this.scrollToTopBtn = false;
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

   isAdmin():boolean{
    return this.router.url==="/admin";
   }
}
