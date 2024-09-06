import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router:Router){}

  collapseNavbar(): void {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }

  gotoProjectsPage(type:string){
    this.router.navigate(['projects'],{queryParams:{projectCategory:type}});
    this.collapseNavbar();
  }
  
}
