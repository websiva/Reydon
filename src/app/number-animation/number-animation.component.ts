import { Component, OnInit, HostListener, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-number-animation',
  templateUrl: './number-animation.component.html',
  styleUrl: './number-animation.component.css'
})
export class NumberAnimationComponent implements OnInit,OnDestroy {
  noOfProjects = 10;
  noOfCustomers = 150;
  noOfLocations = 12;
  initialProjectCount = 0;
  initialCustomers = 0;
  initialLocations = 0;
  hasAnimated = false;  // To ensure counting runs only once

  private observer!: IntersectionObserver;

  ngOnInit(): void {
    this.initializeObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  initializeObserver(): void {
    const options = {
      root: null,  // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.1  // Trigger when 10% of the element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;  // Prevent re-running the animation
          this.startCounting();
        }
      });
    }, options);

    const target = document.querySelector('.stats-section');
    if (target) {
      this.observer.observe(target);
    }
  }

  startCounting(): void {
    this.countProjects();
    this.countCustomers();
    this.countLocations();
  }

  countProjects(): void {
    const projectCounter = setInterval(() => {
      this.initialProjectCount++;
      if (this.initialProjectCount === this.noOfProjects) {
        clearInterval(projectCounter);
      }
    }, 70);
  }

  countCustomers(): void {
    const customerCounter = setInterval(() => {
      this.initialCustomers++;
      if (this.initialCustomers === this.noOfCustomers) {
        clearInterval(customerCounter);
      }
    }, 10);
  }

  countLocations(): void {
    const locationCounter = setInterval(() => {
      this.initialLocations++;
      if (this.initialLocations === this.noOfLocations) {
        clearInterval(locationCounter);
      }
    }, 70);
  }
}
